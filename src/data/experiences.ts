export interface ExperienceProps {
    company: {
        name: string
        url: string // URL to the company/organization's website
        logo?: {
            type: 'img' | 'svg' | 'html'
            value: string | ImageMetadata | ((props: any) => any) // Source URL of the image or a component/function returning an image
        }
    }
    positions: {
        title: string // Title of the role/position
        description: string
        fromDate: string // Start date of the position, formatted as `Mon YYYY`
        toDate?: string // End date of the position, formatted as `Mon YYYY`, optional (for ongoing positions)
        technologies?: string[] // Technologies used in the position, e.g., ['python', 'ros2']
    }[]
}

import epflAITeamLogo from '../assets/logos-icons/epfl-ai-team-logo.svg'
import mathislabLogo from '../assets/logos-icons/mathislab-logo.webp'
import isirLogo from '../assets/logos-icons/isir-logo.png'
import omniLogo from '../assets/logos-icons/omni-logo.svg'
import epflLogo from '../assets/logos-icons/epfl-logo-cropped.png'

export const experiences: ExperienceProps[] = [
    {
        company: {
            name: 'Automatic Control Laboratory – EPFL',
            url: 'https://www.epfl.ch/labs/la/',
            logo: { type: 'img', value: epflLogo },
        },
        positions: [
            {
                title: 'Semester Project',
                description: `Research laboratory of EPFL specialising in optimization and predictive control methods.\nDeveloping an MPC formulation for a hovering "drone" playing air-hockey, following a Model-in-the-Loop, Software-in-the-Loop and Hardware-in-the-Loop approach.`,
                fromDate: 'Sep 2026',
            },
        ],
    },
    {
        company: {
            name: 'Mathis Group – EPFL',
            url: 'https://www.mathislab.org/',
            logo: { type: 'img', value: mathislabLogo },
        },
        positions: [
            {
                title: 'Semester Project, then Research Assistant',
                description: `Research laboratory of EPFL specialising in computational neuroscience and machine learning.\nTrained an RL agent to play table tennis using complex musculoskeletal models within the MyoSuite and MuJoCo frameworks.\nImplemented and built upon research paper methodologies to achieve SOTA performance.\nTransitioned the implementation to MuJoCo Warp, enabling parallel simulation on GPU using the mjlab framework.`,
                fromDate: 'Feb 2026',
            },
        ],
    },
    {
        company: {
            name: 'EPFL AI Team',
            url: 'https://epflaiteam.ch',
            logo: {
                type: 'svg',
                value: epflAITeamLogo,
            },
        },
        positions: [
            {
                title: 'RL Engineer, PAWS Project',
                description: `Developed quadruped locomotion policies with reinforcement learning using NVIDIA Isaac Lab. Worked on the hardware interface to control the motors of in-house made quadruped robots.`,
                fromDate: 'Feb 2026',
            },
        ],
    },
    {
        company: {
            name: 'Institute of Intelligent Systems and Robotics (ISIR)',
            url: 'https://www.isir.upmc.fr/',
            logo: { type: 'img', value: isirLogo },
        },
        positions: [
            {
                title: 'Research Intern',
                description: `Research laboratory of Sorbonne University / CNRS specialising in robot learning and human-robot interaction.\nDeveloped IGM/DGM geometric models for a parallel robot and validated them against physical measurements.\nDesigned a GUI for trajectory planning and execution.\nImplemented ROS2 low-level motor control over CAN bus.\nIntegrated the robot with a motion capture system for closed-loop position feedback.`,
                fromDate: 'Apr 2025',
                toDate: 'Aug 2025',
            },
        ],
    },
    {
        company: {
            name: 'Omni',
            url: 'https://www.omni.community/',
            logo: { type: 'img', value: omniLogo },
        },
        positions: [
            {
                title: 'Intern',
                description: `Start-up dedicated to the mobility of disabled people using electric devices. Prepared, repaired, and reconditioned electric scooters. Created educational and technical videos for customers and technicians.`,
                fromDate: 'Jun 2024',
                toDate: 'Jul 2024',
            },
        ],
    },
]
