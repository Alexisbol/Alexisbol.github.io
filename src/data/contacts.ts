export interface ContactProps {
    url: string
    shorthand: string
    logo: {
        type: 'img' | 'svg' | 'html'
        value: string | ImageMetadata | ((props: any) => any) // Source URL of the image or a component/function returning an image
    }
}

import githubLogo from '../assets/logos-icons/github-logo.svg'
import linkedinLogo from '../assets/logos-icons/linkedin-logo.svg'
import emailIcon from '../assets/logos-icons/mailto.svg'

export const contacts: ContactProps[] = [
    {
        url: 'https://github.com/Alexisbol',
        shorthand: '/Alexisbol',
        logo: {
            type: 'svg',
            value: githubLogo,
        },
    },
    {
        url: 'https://www.linkedin.com/in/alexis-bollack',
        shorthand: '/alexis-bollack',
        logo: {
            type: 'svg',
            value: linkedinLogo,
        },
    },
    {
        url: 'mailto:alexis.bollack@gmail.com',
        shorthand: 'alexis.bollack@gmail.com',
        logo: {
            type: 'svg',
            value: emailIcon,
        },
    },
]
