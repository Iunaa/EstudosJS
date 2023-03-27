import "./components/atoms/teste";

const articleListContent = [{
    title: 'Design',
    paragraph: 'Agency provides a full service range including technical skills, design.',
    anchor: 'Learn More etc',
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

const section = setElement('section')
section.className = 'cardList'
insertElement(body,section)

for (let index = 0; index < articleListContent.length; index ++){

    const article = setElement ('article') //cria o elemento
    article.className = 'articleList__article' //estilizar
    insertElement (section,article) //insere o elemento

    const picture = setElement('picture')
    insertElement (article, picture)

    const img = setAttribute('src', articleList[index.imagePath])
    insertElement(picture,img)

    const h4 = setElement('h4')
    h4.innerHTML = articleListContent[index].title
    h4.className = 'articleList__title'
    insertElement(article, h4)

    const p = setElement('p')
    p.innerHTML = articleListContent[index].paragraph
    p.className = 'articleList__paragraph'
    insertElement(article, p)

    const a = setElement('a')
    a.innerHTML = articleListContent[index].anchor
    a.className = 'articleList__anchor'
    insertElement(article, a)
}

//função para criar elementos
function setElement (element) {
    const temporaryElement = document.createElement(element)
    return temporaryElement
}

//função p/ append no pai
function insertElement(elementFather, elementChild){
    elementFather.appendChild(elementChild)
}