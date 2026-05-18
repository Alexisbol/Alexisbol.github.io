export interface EducationProps {
    institution: {
        name: string // Name of the institution
        url?: string // URL to the institution's website
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
import ecnLogo from '../assets/logos-icons/ecn-logo.png'
import chaptalLogo from '../assets/logos-icons/chaptal-logo.jpg'
import carnotLogo from '../assets/logos-icons/lycee_carnot_paris_logo.jpeg'

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
        degree: 'MSc - Robotics (Double Degree)',
        fromDate: '2025',
        toDate: 'present',
        description: `Specializing in the intersection of Reinforcement Learning and autonomous systems. Focusing on Robot Dynamics, Control Systems, and Deep Learning. Relevant courses: Legged robots, Reinforcement learning, Machine learning I, Model predictive control, Advanced control systems, Applied data analysis, Deep learning.`,
    },
    {
        institution: {
            name: 'École Centrale de Nantes',
            url: 'https://www.ec-nantes.fr',
            logo: {
                type: 'img',
                value: ecnLogo,
            },
        },
        degree: 'MSc - Engineering',
        fromDate: '2023',
        toDate: '2025',
        description: `Engineering student at a highly selective French <em>Grande École</em> conferring a degree equivalent to a Master of Science. Specialization in Robotics, Control Systems, and Software Engineering.`,
    },
    {
        institution: {
            name: 'Lycée Chaptal',
            logo: {
                type: 'img',
                value: chaptalLogo,
            },
        },
        degree: 'Classes Préparatoires aux Grandes Écoles (MPSI/MP)',
        fromDate: '2021',
        toDate: '2023',
        description: `Two-year intensive undergraduate program in Mathematics and Physics preparing for competitive national entrance exams to the Grandes Écoles.`,
    },
    {
        institution: {
            name: 'Lycée Carnot',
            logo: {
                type: 'img',
                value: carnotLogo,
            },
        },
        degree: 'Baccalauréat (Maths-Physics) with Honours',
        fromDate: 'Sep 2018',
        toDate: 'Jun 2021',
        description: `Equivalent to a High School Diploma, majoring in Mathematics and Physics, obtained with Honours.`,
    },
]
