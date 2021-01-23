import gitHubImage from '../../assets/github-battle.webp'
import crudApplicationImage from '../../assets/crud-application.png'
import ravenousImage from '../../assets/ravenous.jpg'
import menutifyImage from '../../assets/menutify.png'
import crudAppImage2 from '../../assets/doc-viewer.png'
import githubImage2 from '../../assets/github-battle-vs.png'
import githubImage3 from '../../assets/github-battle-results.png'

export const Projects = [
    {
        id: '01',
        number: '01',
        title: 'GitHub Battle',
        description: 'Application made in React using the GitHub API',
        imagePath: gitHubImage,
        to: 'github-battle',
        items: [
            'React Context', 'React Router', 'Code Splitting with React Router'
        ],
        moreImages: [{ imagePath: githubImage2, title: 'Battle Route'}, {imagePath: githubImage3, title: 'Results Route'}],
        visitWebsite: 'https://github-battle-sergiu.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    },
    {
        id: '02',
        number: '02',
        title: 'Ravenous',
        description: 'Restaurant finder app made with React and Yelp API',
        imagePath: ravenousImage,
        to: 'ravenous',
        items: [
            'React', 'CodeCademy Project', 'Rest APIs'
        ],
        visitWebsite: 'https://github-battle-sergiu.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    },
    {
        id: '03',
        number: '03',
        title: 'Menutify',
        description: 'Menu creator for Restaurants',
        imagePath: menutifyImage,
        to: 'menutify',
        items: [
            'React Hooks', 'JSON-Box.io', 'Web Design'
        ],
        visitWebsite: 'https://github-battle-sergiu.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    },
    {
        id: '04',
        number: '04',
        title: 'Document Visualizer',
        description: 'CRUD application that allows you to add documents, list them, see the details and edit them',
        imagePath: crudApplicationImage,
        to: 'document-visualizer',
        longDescription: [
            ''
        ],
        items: [
            'CRUD Application', 'React', 'Filtering and pagination'
        ],
        moreImages: [{imagePath: crudAppImage2, title: 'Document view'}],
        visitWebsite: 'https://crud-app-sergio.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    }
]