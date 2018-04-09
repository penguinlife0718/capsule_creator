const parse = raw => {
    const [title, subIntroduce, link] = raw.split(/[\[,\]]/).filter(x => x)
    return { title, subIntroduce, link }
}
const as = Array.from(document.querySelectorAll('h1.entry-title'))
as.forEach(a => {
    const { title, subIntroduce, link } = parse(a.innerHTML)
    //標題
    a.className = 'introduce'
    a.innerHTML = `${title}`
    //副標題
    const subIntroduceDocument = document.createElement('div')
    subIntroduceDocument.className = 'subIntroduce'
    subIntroduceDocument.innerHTML = `${subIntroduce}`
    a.parentNode.appendChild(subIntroduceDocument)
})


