'use strict';

$(document).ready(function () {
    var owl = $('#owlTop');
    var itemRwd = void 0;
    if ($(window).width() < 767) {
        itemRwd = 1;
    } else {
        itemRwd = 2;
    }
    owl.owlCarousel({
        center: true,
        items: itemRwd,
        loop: true,
        autoplay: true,
        // autoplay: false,
        // autoplayTimeout: 1000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });
    $('.play').on('click', function () {
        // owl.trigger('play.owl.autoplay', [1000])
        owl.trigger('play.owl.autoplay', [2000]);
    });
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay');
    });
});

$(document).ready(function () {
    var owl2 = $('#owlProject');
    var item2Rwd = void 0;
    var marginRwd = void 0;
    if ($(window).width() < 767) {
        item2Rwd = 1;
    } else {
        item2Rwd = 2;
    }
    owl2.owlCarousel({
        margin: 5,
        items: item2Rwd,
        loop: true
    });
});