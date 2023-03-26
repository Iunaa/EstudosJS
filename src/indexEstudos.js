import "./components/atoms/teste";

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

const section = setElement('section')
section.className = 'cardList'
insertElement(body,section)