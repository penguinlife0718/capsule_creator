'use strict';

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1, player2, player3;
function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('video_1', {
        height: '390',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'autohide': 1,
            'modestbranding': 1
        },
        videoId: 'SMsbwS4H9iM',
        events: {
            'onReady': function onReady() {
                player1.mute();
            }
        }
    });
    player2 = new YT.Player('video_2', {
        height: '390',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'autohide': 1,
            'modestbranding': 1
        },
        videoId: 'KvhdI1-MeE0',
        events: {
            'onReady': function onReady() {
                player2.mute();
            }
        }
    });
    player3 = new YT.Player('video_3', {
        height: '390',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'autohide': 1,
            'modestbranding': 1
        },
        videoId: 'v7_2mZ_1raY',
        events: {
            'onReady': function onReady() {
                player3.mute();
            }
        }
    });
}

var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1;

if (!isSafari) {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".js-close-any").scroll(function () {
            var distance = function (x, y) {
                return x - y;
            }($('.network_line').offset().top, $(window).scrollTop());
            if (distance <= 500) {
                // player3.playVideo();
                // player2.playVideo();
                // player1.playVideo();
            }
        });
    }
}