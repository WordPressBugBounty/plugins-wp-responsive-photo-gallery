/* Photo Gallery Slideshow - Modern Engine (dependency-free, vanilla JS) */
(function () {
    'use strict';

    function initSlider(root) {
        if (root.__rjgModernInit) { return; }
        root.__rjgModernInit = true;

        var stage = root.querySelector('.rjg-mslider-stage');
        var slides = Array.prototype.slice.call(root.querySelectorAll('.rjg-mslider-slide'));
        var thumbs = Array.prototype.slice.call(root.querySelectorAll('.rjg-mslider-thumb'));
        var filmstrip = root.querySelector('.rjg-mslider-filmstrip');
        if (!stage || slides.length === 0) { return; }

        var speed = parseInt(root.getAttribute('data-speed'), 10) || 600;
        var interval = parseInt(root.getAttribute('data-interval'), 10) || 4000;
        var autoplay = root.getAttribute('data-autoplay') === '1';
        var infobar = root.querySelector('.rjg-mslider-infobar');
        var current = 0;
        var timer = null;

        slides.forEach(function (slide) {
            slide.style.transitionDuration = speed + 'ms';
        });

        function updateInfobar(index) {
            if (!infobar) { return; }
            infobar.textContent = (index + 1) + ' / ' + slides.length;
        }

        // Scrolls only the filmstrip's own horizontal scrollbar so the active
        // thumbnail stays in view. Deliberately does NOT use scrollIntoView() —
        // that scrolls every scrollable ancestor including the page itself,
        // which can yank the whole page to the thumbnail's vertical position.
        function scrollThumbIntoView(thumb) {
            if (!filmstrip || !thumb) { return; }
            var targetLeft = thumb.offsetLeft - ( filmstrip.clientWidth - thumb.offsetWidth ) / 2;
            if (targetLeft < 0) { targetLeft = 0; }
            if (typeof filmstrip.scrollTo === 'function') {
                filmstrip.scrollTo({ left: targetLeft, behavior: 'smooth' });
            } else {
                filmstrip.scrollLeft = targetLeft;
            }
        }

        function goTo(index) {
            if (index === current) { return; }
            if (index < 0) { index = slides.length - 1; }
            if (index >= slides.length) { index = 0; }

            slides[current].classList.remove('is-active');
            slides[index].classList.add('is-active');

            if (thumbs[current]) { thumbs[current].classList.remove('is-active'); }
            if (thumbs[index]) {
                thumbs[index].classList.add('is-active');
                scrollThumbIntoView(thumbs[index]);
            }

            current = index;
            updateInfobar(index);
        }

        function next() { goTo(current + 1); }
        function prev() { goTo(current - 1); }

        function startAutoplay() {
            if (!autoplay || slides.length < 2) { return; }
            stopAutoplay();
            timer = window.setInterval(next, interval);
        }
        function stopAutoplay() {
            if (timer) { window.clearInterval(timer); timer = null; }
        }

        var nextBtn = root.querySelector('.rjg-mslider-nav.rjg-next');
        var prevBtn = root.querySelector('.rjg-mslider-nav.rjg-prev');
        if (nextBtn) { nextBtn.addEventListener('click', function (e) { e.preventDefault(); next(); startAutoplay(); }); }
        if (prevBtn) { prevBtn.addEventListener('click', function (e) { e.preventDefault(); prev(); startAutoplay(); }); }

        thumbs.forEach(function (thumb, i) {
            thumb.addEventListener('click', function (e) {
                e.preventDefault();
                goTo(i);
                startAutoplay();
            });
        });

        root.addEventListener('mouseenter', stopAutoplay);
        root.addEventListener('mouseleave', startAutoplay);

        startAutoplay();
    }

    function initAll() {
        var sliders = document.querySelectorAll('.rjg-mslider');
        for (var i = 0; i < sliders.length; i++) {
            initSlider(sliders[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
})();
