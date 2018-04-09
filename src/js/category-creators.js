const parse = raw => {
    const [text, subIntroduce, link] = raw.split(/[\[,\]]/).filter(x => x)
    return { text, subIntroduce, link }
}
if (/creators\/$/.test(window.location.pathname)) {
    const as = Array.from(document.querySelectorAll('h3.entry-title a'))
    as.forEach(a => {
        // 發文格式：
        // [卡咩蓋桑][撒斯嘎卡咩蓋桑偶勒哇八嘎咪歹][https://www.youtube.com/watch?v=UUT0yiVJP14&t=64s]
        //介紹文章連結
        const { text, subIntroduce, link } = parse(a.innerHTML)
        a.target = '_blank'
        a.className = 'introduce'
        a.innerHTML = `介紹`
        //副標題
        const subIntroduceDocument = document.createElement('div')
        const subIntroduceSpan = document.createElement('span')
        subIntroduceDocument.className = 'subIntroduce'      
        subIntroduceSpan.innerHTML = `${subIntroduce}`
        subIntroduceDocument.appendChild(subIntroduceSpan)
        a.parentNode.appendChild(subIntroduceDocument)         
        // youtube
        const youtube = document.createElement('a')
        const youtubeimg = document.createElement('img')
        const youtubetitle = document.createElement('div')
        // youtube圖片
        youtubeimg.src = '/wordpress/src/assets/img/icon/youtube.svg'
        // youtube title (要做排序)
        youtubetitle.className = 'youtubetitle'
        youtubetitle.innerHTML = 'Youtube'
        youtube.href = link
        youtube.target = '_blank'
        youtube.className = 'youtube'
        youtube.appendChild(youtubeimg)
        youtube.appendChild(youtubetitle)                        
        a.parentNode.appendChild(youtube)  
        // 標題     
        const title = document.createElement('div')
        title.className = 'title'
        title.innerHTML = `${text}`
        a.parentNode.appendChild(title) 
    })
}

const h1s = Array.from(document.querySelectorAll('h1.entry-title'))
h1s.forEach(h1 => {
    const { text } = parse(h1.innerHTML)
    h1.innerHTML = `${text}`
})
// 改title


window.onscroll = function () { categoryNavScorll() };
const category = document.getElementById("categoryNav");
const sticky = category.offsetTop;
function categoryNavScorll() {
    if (window.pageYOffset >= sticky-56) { //category多高sticky就-多高
        category.classList.add("categoryNavSticky");
    } else {
        category.classList.remove("categoryNavSticky");
    }
}
