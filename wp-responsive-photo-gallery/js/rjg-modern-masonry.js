/* Masonry Tiled Gallery - Modern Engine (dependency-free, vanilla JS) */
(function () {
    'use strict';

    function pxVal(v) {
        var n = parseInt(v, 10);
        return isNaN(n) ? 0 : n;
    }

    function layoutGrid(app) {
        var grid = app.querySelector('.rjg-mgrid');
        if (!grid) { return false; }
        var wraps = grid.querySelectorAll('.rjg-mgrid-item-wrap');

        var cs = window.getComputedStyle(grid);
        var colWidth = pxVal(cs.getPropertyValue('--rjg-col-width')) || 220;
        var gap = pxVal(cs.getPropertyValue('--rjg-gap')) || 8;
        var containerWidth = grid.clientWidth;

        // A zero (or otherwise invalid) width usually means the container's
        // own layout hasn't actually settled yet — seen in practice as an
        // intermittent single-column ("vertical lines") result that a page
        // refresh fixes. Rather than commit to a bogus layout computed from
        // that, signal failure so the caller retries shortly instead.
        if (!(containerWidth > 0)) {
            return false;
        }

        // Matches how CSS's repeat(auto-fill, minmax(colWidth, 1fr)) decides
        // column count, so switching to JS-driven placement doesn't change
        // how many columns appear at a given width.
        var columns = Math.max(1, Math.floor((containerWidth + gap) / (colWidth + gap)));

        if (wraps.length > 0 && wraps.length <= columns) {
            grid.classList.add('rjg-mgrid-row-mode');
            grid.style.height = '';
            for (var k = 0; k < wraps.length; k++) {
                wraps[k].style.position = '';
                wraps[k].style.left = '';
                wraps[k].style.top = '';
                wraps[k].style.width = '';
            }
            return true;
        }
        grid.classList.remove('rjg-mgrid-row-mode');

        // Actual per-column width once gaps between `columns` columns are
        // accounted for, so columns fill the full container width evenly
        // (matching how 1fr distributed leftover space in the old CSS Grid
        // version).
        var actualColWidth = (containerWidth - gap * (columns - 1)) / columns;

        // Pass 1: give every item its column width WITHOUT absolute
        // positioning yet, so the browser can compute each item's real
        // rendered height at that width — needed before deciding placement.
        for (var p = 0; p < wraps.length; p++) {
            wraps[p].style.position = 'static';
            wraps[p].style.width = actualColWidth + 'px';
        }

        var colHeights = [];
        for (var z = 0; z < columns; z++) { colHeights.push(0); }

        // Pass 2: shortest-column-first placement (real masonry) — always
        // place the next item into whichever column is currently shortest,
        // rather than the browser's own row-by-row auto-placement, which
        // can leave a visibly short column with a gap at the bottom.
        for (var i = 0; i < wraps.length; i++) {
            var wrap = wraps[i];
            var tile = wrap.querySelector('.rjg-mgrid-item') || wrap;
            var h = tile.getBoundingClientRect().height;
            if (!h) { continue; }

            var shortestIndex = 0;
            for (var c = 1; c < columns; c++) {
                if (colHeights[c] < colHeights[shortestIndex]) {
                    shortestIndex = c;
                }
            }

            wrap.style.position = 'absolute';
            wrap.style.left = ( shortestIndex * ( actualColWidth + gap ) ) + 'px';
            wrap.style.top = colHeights[shortestIndex] + 'px';

            colHeights[shortestIndex] += h + gap;
        }

        var maxHeight = 0;
        for (var m = 0; m < colHeights.length; m++) {
            if (colHeights[m] > maxHeight) { maxHeight = colHeights[m]; }
        }
        grid.style.height = Math.max(0, maxHeight - gap) + 'px';
        return true;
    }

    function initApp(app) {
        if (app.__rjgMgridInit) { return; }
        app.__rjgMgridInit = true;

        var revealed = false;
        var waitCycleActive = false;

        function repack() {
            // A plain repack (resize, post-reveal image settle) can also hit
            // an invalid width measurement in rare cases — retry once on the
            // next frame rather than leaving a bad layout on screen.
            if (!layoutGrid(app) && window.requestAnimationFrame) {
                window.requestAnimationFrame(function () { layoutGrid(app); });
            }
        }

        function reveal(attemptsLeft) {
            if (attemptsLeft === undefined) { attemptsLeft = 10; }
            if (layoutGrid(app)) {
                app.classList.add('rjg-mgrid-ready');
                revealed = true;
                return;
            }
            if (attemptsLeft <= 0) {
                // Give up gracefully rather than staying hidden forever —
                // reveal with whatever layoutGrid can produce even if the
                // width measurement still looks off.
                layoutGrid(app);
                app.classList.add('rjg-mgrid-ready');
                revealed = true;
                return;
            }
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(function () { reveal(attemptsLeft - 1); });
            } else {
                window.setTimeout(function () { reveal(attemptsLeft - 1); }, 50);
            }
        }

        // Waits for every currently-incomplete image to either load or error
        // before computing the layout and revealing the gallery ONCE, rather
        // than computing+revealing on every single image's load event as
        // they trickle in — which visibly reshuffled the whole layout each
        // time and looked like images "loading one by one, then re-masonrying".
        // A safety timeout guarantees the gallery still appears even if some
        // image never finishes loading (e.g. a broken URL or dead-slow link).
        function layoutWhenReady() {
            if (waitCycleActive) { return; }
            waitCycleActive = true;

            var imgs = app.querySelectorAll('.rjg-mgrid-item img');
            var pending = 0;
            var settled = false;

            function settleOnce() {
                if (settled) { return; }
                settled = true;
                waitCycleActive = false;
                reveal();
            }

            for (var i = 0; i < imgs.length; i++) {
                var img = imgs[i];
                // .complete alone correctly means "finished trying to load,
                // whether it succeeded or errored" — naturalWidth === 0 is
                // also true for an image that already finished with an
                // error, so including it here would make this code think a
                // long-settled failed image is still pending forever (its
                // load/error event already fired in the past, before this
                // listener existed, so it will never fire again).
                if (!img.complete) {
                    pending++;
                    img.addEventListener('load', onImageSettle, { once: true });
                    img.addEventListener('error', onImageSettle, { once: true });
                }
            }
            function onImageSettle() {
                pending--;
                if (pending <= 0) { settleOnce(); }
            }

            if (pending === 0) {
                settleOnce();
            } else {
                window.setTimeout(settleOnce, 3000);
            }
        }

        layoutWhenReady();

        // Page builders (Elementor/Divi) and long pages can place this gallery far
        // below the fold, where loading="lazy" images don't start fetching (and
        // therefore never fire a real height) until they're actually near the
        // viewport. If the gallery hasn't been revealed yet by the time it
        // scrolls into view (the initial wait above timed out with images still
        // pending, or lazy images hadn't started loading at all), run the same
        // wait-then-reveal-once cycle again now that they're actually loading.
        if (window.IntersectionObserver) {
            var io = new IntersectionObserver(function (entries) {
                for (var e = 0; e < entries.length; e++) {
                    if (entries[e].isIntersecting) {
                        if (!revealed) {
                            layoutWhenReady();
                        } else {
                            repack();
                        }
                    }
                }
            }, { rootMargin: '600px 0px 600px 0px' });
            io.observe(app);
        }

        var resizeTimer = null;
        window.addEventListener('resize', function () {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(repack, 200);
        });
        window.addEventListener('load', repack);
    }

    function initAll() {
        var apps = document.querySelectorAll('.rjg-mgrid-app');
        for (var i = 0; i < apps.length; i++) {
            initApp(apps[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
