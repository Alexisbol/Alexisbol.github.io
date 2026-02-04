export interface EducationProps {
    institution: {
        name: string // Name of the institution
        url: string // URL to the institution's website
        logo?: {
            type: 'img' | 'svg' | 'html'
            value: string | ImageMetadata | ((props: any) => any) // Source URL of the image or a component/function returning an image
        }
    }
    degree: string // Degree title
    fromDate: string
    toDate: string // If ongoing => expected graduation date
    description: string
}

import epflLogo from '../assets/logos-icons/epfl-logo-cropped.png'
import mcgillLogo from '../assets/logos-icons/mcgill-logo-s.jpg'
import epsomCollegeLogo from '../assets/logos-icons/epsom-college-logo-s.jpg'

export const education: EducationProps[] = [
    {
        institution: {
            name: 'EPFL',
            url: 'https://www.epfl.ch',
            logo: {
                type: 'img',
                value: epflLogo,
            },
        },
        degree: 'MSc - Robotics',
        fromDate: 'Sep 2025',
        toDate: 'Dec 2027 (expected)',
        description: `I'm specializing in Mobile Robotics, with a focus on Embodied AI. After knocking out the rigorous mathematical foundations (MPC, Convex Optimization), I'm now applying them to physical systems - currently doing research on real-time vision for drones, alongside coursework in RL, CV and deep learning for autonomous vehicles.`,
    },
    {
        institution: {
            name: 'McGill University',
            url: 'https://www.mcgill.ca',
            logo: {
                type: 'img',
                value: mcgillLogo,
            },
        },
        degree: 'BSc - Honours Computer Science',
        fromDate: 'Aug 2022',
        toDate: 'May 2025',
        description: `I graduated with First-Class Honours (3.85 GPA), dipping my toes in various advanced topics like Machine Learning, Computer Animation, Computational Biology, and Distributed Systems. Outside of class, I was heavily involved in <a href="https://www.mcgillrobotics.ca" target="_blank">McGill Robotics</a>, <a href="https://gamedevmcgill.ca/" target="_blank">GameDev McGill</a>, and competed in hackathons like <a href="https://mchacks.ca/" target="_blank">McHacks</a> and <a href="https://www.linkedin.com/company/pharmahacks/about/" target="_blank">PharmaHacks</a>.`,
    },
    {
        institution: {
            name: 'Epsom College',
            url: 'https://www.epsomcollege.org.uk/',
            logo: {
                type: 'img',
                value: epsomCollegeLogo,
            },
        },
        degree: 'A-Levels (CS, Math, Phys) & GCSEs',
        fromDate: 'Sep 2017',
        toDate: 'Jun 2022',
        description: `My secondary education in the UK, where I earned Art and Computer Science awards, laid the groundwork for my technical and creative interests. Beyond academics, I was active in the school's tennis and field hockey teams, and completed my Duke of Edinburgh's Award.`,
    },
]
