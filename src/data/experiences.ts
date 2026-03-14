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
        technologies?: string[] // Technologies used in the position, e.g., ['js', 'react', 'tailwind', 'unreal']
    }[]
}

import mcgillRoboticsLogo from '../assets/logos-icons/mcgill-robotics-logo.png'
import lisLogo from '../assets/logos-icons/LIS-logo.png'
import epflAITeamLogo from '../assets/logos-icons/epfl-ai-team-logo.svg'

export const experiences: ExperienceProps[] = [
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
                title: 'Machine Learning Engineer, PAWS Project',
                // PAWS = Jumping policy for quadrupedal robot (ANYmal) via RL in Isaac Lab
                description: `Developing a jumping control policy for the ANYmal quadrupedal robot using reinforcement learning in NVIDIA Isaac Lab. The project focuses on sim-to-real transfer, leveraging domain randomization and system identification to ensure robust performance on real hardware.`,
                fromDate: 'Mar 2026',
            },
        ],
    },
    {
        company: {
            name: 'Laboratory of Intelligent Systems @ EPFL',
            url: 'https://lis.epfl.ch',
            logo: {
                type: 'img',
                value: lisLogo,
            },
        },
        positions: [
            {
                title: 'Graduate Student Researcher',
                // Highlights: Embedded, Real-time, Deep Learning, Hardware constraints
                description: `Designing a lightweight deep learning pipeline for dense depth estimation on raw fisheye imagery. Targeting real-time inference on embedded drone hardware (NVIDIA Jetson) by bypassing standard rectification latency and artifacts.`,
                fromDate: 'Feb 2026',
                // toDate: 'May 2026',
            },
        ],
    },
    {
        company: {
            name: 'McGill Robotics',
            url: 'https://mcgillrobotics.com/auv',
            logo: {
                type: 'img',
                value: mcgillRoboticsLogo,
            },
        },
        positions: [
            {
                title: 'Software Engineer, AUV Project',
                // Highlights: Optimization, Docker, Migration
                description: `Fully autonomous underwater vehicle for the RoboSub competition. Worked on performance optimization of the AUV simulation (Unity), contributed to a critical stack migration from ROS 1 to ROS 2 and led a documentation overhaul to accelerate developer onboarding.`,
                fromDate: 'Sep 2024',
                toDate: 'Jun 2025',
            },
        ],
    },
    {
        company: {
            name: 'McGill Computational Genomics Lab',
            url: 'https://cs.mcgill.ca/~blanchem',
        },
        positions: [
            {
                title: 'Honours Research Project',
                // Highlights: PyTorch, Generative AI, Benchmarking
                description: `Investigated Generative Flow Matching models, specifically Acceleration Flow Matching (AFM). Extended a PyTorch codebase to benchmark AFM against standard baselines, analyzing performance gains in modeling higher-order dynamics.`,
                fromDate: 'Jan 2025',
                toDate: 'Apr 2025',
            },
        ],
    },
]
