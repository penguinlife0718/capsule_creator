'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var parse = function parse(raw) {
    var _raw$split$filter = raw.split(/[\[,\]]/).filter(function (x) {
        return x;
    }),
        _raw$split$filter2 = _slicedToArray(_raw$split$filter, 3),
        text = _raw$split$filter2[0],
        subIntroduce = _raw$split$filter2[1],
        link = _raw$split$filter2[2];

    return { text: text, subIntroduce: subIntroduce, link: link };
};
if (/creators\/$/.test(window.location.pathname)) {
    var as = Array.from(document.querySelectorAll('h3.entry-title a'));
    as.forEach(function (a) {
        // 發文格式：
        // [卡咩蓋桑][撒斯嘎卡咩蓋桑偶勒哇八嘎咪歹][https://www.youtube.com/watch?v=UUT0yiVJP14&t=64s]
        //介紹文章連結
        var _parse = parse(a.innerHTML),
            text = _parse.text,
            subIntroduce = _parse.subIntroduce,
            link = _parse.link;

        a.target = '_blank';
        a.className = 'introduce';
        a.innerHTML = '\u4ECB\u7D39';
        //副標題
        var subIntroduceDocument = document.createElement('div');
        var subIntroduceSpan = document.createElement('span');
        subIntroduceDocument.className = 'subIntroduce';
        subIntroduceSpan.innerHTML = '' + subIntroduce;
        subIntroduceDocument.appendChild(subIntroduceSpan);
        a.parentNode.appendChild(subIntroduceDocument);
        // youtube
        var youtube = document.createElement('a');
        var youtubeimg = document.createElement('img');
        var youtubetitle = document.createElement('div');
        // youtube圖片
        youtubeimg.src = '/wordpress/src/assets/img/icon/youtube.svg';
        // youtube title (要做排序)
        youtubetitle.className = 'youtubetitle';
        youtubetitle.innerHTML = 'Youtube';
        youtube.href = link;
        youtube.target = '_blank';
        youtube.className = 'youtube';
        youtube.appendChild(youtubeimg);
        youtube.appendChild(youtubetitle);
        a.parentNode.appendChild(youtube);
        // 標題     
        var title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = '' + text;
        a.parentNode.appendChild(title);
    });
}

var h1s = Array.from(document.querySelectorAll('h1.entry-title'));
h1s.forEach(function (h1) {
    var _parse2 = parse(h1.innerHTML),
        text = _parse2.text;

    h1.innerHTML = '' + text;
});
// 改title


window.onscroll = function () {
    categoryNavScorll();
};
var category = document.getElementById("categoryNav");
var sticky = category.offsetTop;
function categoryNavScorll() {
    if (window.pageYOffset >= sticky - 56) {
        //category多高sticky就-多高
        category.classList.add("categoryNavSticky");
    } else {
        category.classList.remove("categoryNavSticky");
    }
}