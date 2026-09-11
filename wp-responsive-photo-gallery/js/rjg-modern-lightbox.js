/* Modern Lightbox (dependency-free, vanilla JS) - images + video iframes */
(function () {
    'use strict';

    var overlay = null;
    var stage = null;
    var closeBtn, prevBtn, nextBtn;
    var currentGroup = [];
    var currentIndex = 0;

    function buildOverlay() {
        if (overlay) { return; }
        overlay = document.createElement('div');
        overlay.className = 'rjg-lb-overlay';
        overlay.innerHTML =
            '<button type="button" class="rjg-lb-close" aria-label="Close">&#10005;</button>' +
            '<button type="button" class="rjg-lb-prev" aria-label="Previous">&#10094;</button>' +
            '<div class="rjg-lb-stage"></div>' +
            '<button type="button" class="rjg-lb-next" aria-label="Next">&#10095;</button>';
        document.body.appendChild(overlay);

        stage = overlay.querySelector('.rjg-lb-stage');
        closeBtn = overlay.querySelector('.rjg-lb-close');
        prevBtn = overlay.querySelector('.rjg-lb-prev');
        nextBtn = overlay.querySelector('.rjg-lb-next');

        closeBtn.addEventListener('click', close);
        prevBtn.addEventListener('click', function () { show(currentIndex - 1); });
        nextBtn.addEventListener('click', function () { show(currentIndex + 1); });
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) { close(); }
        });
        document.addEventListener('keydown', function (e) {
            if (!overlay.classList.contains('is-open')) { return; }
            if (e.key === 'Escape') { close(); }
            else if (e.key === 'ArrowLeft') { show(currentIndex - 1); }
            else if (e.key === 'ArrowRight') { show(currentIndex + 1); }
        });
    }

    function renderMedia(item) {
        stage.innerHTML = '<div class="rjg-lb-loading"></div>';

        if (item.type === 'video') {
            var iframe = document.createElement('iframe');
            iframe.className = 'rjg-lb-media';
            iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.src = item.src;
            iframe.addEventListener('load', function () {
                var loader = stage.querySelector('.rjg-lb-loading');
                if (loader) { loader.remove(); }
            });
            stage.appendChild(iframe);
        } else {
            var img = document.createElement('img');
            img.className = 'rjg-lb-media';
            img.alt = item.title || '';
            img.addEventListener('load', function () {
                var loader = stage.querySelector('.rjg-lb-loading');
                if (loader) { loader.remove(); }
            });
            img.src = item.src;
            stage.appendChild(img);
        }

        if (item.title) {
            var cap = document.createElement('div');
            cap.className = 'rjg-lb-caption';
            cap.textContent = item.title;
            stage.appendChild(cap);
        }
    }

    function show(index) {
        if (currentGroup.length === 0) { return; }
        if (index < 0) { index = currentGroup.length - 1; }
        if (index >= currentGroup.length) { index = 0; }
        currentIndex = index;
        renderMedia(currentGroup[index]);
        var multi = currentGroup.length > 1;
        prevBtn.style.display = multi ? 'flex' : 'none';
        nextBtn.style.display = multi ? 'flex' : 'none';
    }

    function open(group, startIndex) {
        buildOverlay();
        currentGroup = group;
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        show(startIndex);
    }

    function close() {
        if (!overlay) { return; }
        overlay.classList.remove('is-open');
        stage.innerHTML = '';
        document.body.style.overflow = '';
    }

    function collectGroup(trigger) {
        var groupName = trigger.getAttribute('data-lightbox-group');
        var triggers;
        if (groupName) {
            triggers = document.querySelectorAll('.rjg-lightbox-trigger[data-lightbox-group="' + groupName + '"]');
        } else {
            triggers = [trigger];
        }
        var group = [];
        var startIndex = 0;
        for (var i = 0; i < triggers.length; i++) {
            if (triggers[i] === trigger) { startIndex = group.length; }
            group.push({
                src: triggers[i].getAttribute('href'),
                type: triggers[i].getAttribute('data-type') || 'image',
                title: triggers[i].getAttribute('data-caption') || ''
            });
        }
        return { group: group, startIndex: startIndex };
    }

    document.addEventListener('click', function (e) {
        var trigger = e.target.closest ? e.target.closest('.rjg-lightbox-trigger') : null;
        if (!trigger) { return; }
        e.preventDefault();
        var res = collectGroup(trigger);
        open(res.group, res.startIndex);
    });
})();
