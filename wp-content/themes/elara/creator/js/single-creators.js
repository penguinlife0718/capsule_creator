'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var parse = function parse(raw) {
    var _raw$split$filter = raw.split(/[\[,\]]/).filter(function (x) {
        return x;
    }),
        _raw$split$filter2 = _slicedToArray(_raw$split$filter, 3),
        title = _raw$split$filter2[0],
        subIntroduce = _raw$split$filter2[1],
        link = _raw$split$filter2[2];

    return { title: title, subIntroduce: subIntroduce, link: link };
};
var as = Array.from(document.querySelectorAll('h1.entry-title'));
as.forEach(function (a) {
    var _parse = parse(a.innerHTML),
        title = _parse.title,
        subIntroduce = _parse.subIntroduce,
        link = _parse.link;
    //標題


    a.className = 'introduce';
    a.innerHTML = '' + title;
    //副標題
    var subIntroduceDocument = document.createElement('div');
    subIntroduceDocument.className = 'subIntroduce';
    subIntroduceDocument.innerHTML = '' + subIntroduce;
    a.parentNode.appendChild(subIntroduceDocument);
});