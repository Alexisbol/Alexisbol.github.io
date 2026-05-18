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

export const experiences: ExperienceProps[] = [
    {
        company: {
            name: 'Mathis Group – EPFL',
            url: 'https://www.mathislab.org/',
            logo: { type: 'img', value: mathislabLogo },
        },
        positions: [
            {
                title: 'Semester Project',
                description: `Research laboratory of EPFL specialising in computational neuroscience and machine learning. Trained an RL agent to play table tennis using complex musculoskeletal models within the MyoSuite and MuJoCo frameworks. Implemented and built upon research paper methodologies to achieve SOTA performance. Transitioned the implementation to MuJoCo Warp, enabling parallel simulation on GPU using the mjlab framework.`,
                fromDate: 'Feb 2026',
                toDate: 'Jun 2026',
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
                description: `Developed quadruped locomotion policies with reinforcement learning using NVIDIA Isaac Lab. Worked on sim-to-sim and sim-to-real transfer to deploy the learned policy on the Unitree Go2 quadruped robot.`,
                fromDate: 'Feb 2026',
                toDate: 'Jun 2026',
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
                description: `Research laboratory of Sorbonne University / CNRS specialising in robot learning and human-robot interaction. Developed IGM/DGM geometric models for a parallel robot and validated them against physical measurements. Designed a GUI for trajectory planning and execution. Implemented ROS2 low-level motor control over CAN bus, and integrated the robot with a motion capture system for closed-loop position feedback.`,
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
