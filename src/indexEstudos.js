

const articleListContent = [{
    title: 'Design',
    paragraph: 'Agency provides a full service range including technical skills, design.',
    anchor: 'Learn More',
    imagePath: './assets/img/group8.svg'

    
},
    {title: 'Development',
    paragraph: 'Full service range including technical skills, design, business etc.',
    anchor: 'Discover More',
    imagePath: './assets/img/group6.svg'
    },


    {title: 'Marketing',
    paragraph: 'Technical skills, design, business understanding, ability.',
    anchor: 'Explore Now',
    imagePath: './assets/img/group7.svg'
    }

]

const startfake = document.getElementById('startfake')
const img = setElement('img')




const section = setElement('section')
section.className = 'articleList'
insertElement(startfake,section)


articleListContent.map(element => {
    const article = setElement ('article2') //cria o elemento
    article.className = 'articleList__article' //estilizar
    insertElement (section,article) 
    
    //insere o elemento

    const picture = setElement('picture')
    insertElement (article, picture)
    console.log(articleListContent)
    const img = setElement('img')
    img.setAttribute('src', element.imagePath)
    insertElement(picture,img)

    const h4 = setElement('h4')
    h4.innerHTML = element.title
    h4.className = 'articleList__title'
    insertElement(article, h4)

    const p = setElement('p')
    p.innerHTML = element.paragraph
    p.className = 'articleList__paragraph'
    insertElement(article, p)

    const a = setElement('a')
    a.innerHTML = element.anchor
    a.className = 'articleList__anchor'
    insertElement(article, a)
})


//função para criar elementos
function setElement (element) {
    console.log('teste', element)
    const temporaryElement = document.createElement(element)
    console.log('teste', temporaryElement)
    return temporaryElement
}

//função p/ append no pai
function insertElement(elementFather, elementChild){
    console.log(elementFather)
    console.log(elementChild)
    elementFather.appendChild(elementChild)
}