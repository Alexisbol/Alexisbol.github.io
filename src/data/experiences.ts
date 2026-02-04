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

export const experiences: ExperienceProps[] = [
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
                title: 'Graduate Researcher',
                // Highlights: Embedded, Real-time, Deep Learning, Hardware constraints
                description: `Designing a lightweight deep learning pipeline for dense depth estimation on raw fisheye imagery. Targeting real-time inference on embedded drone hardware (NVIDIA Jetson) by bypassing standard rectification latency and artifacts.`,
                fromDate: 'Feb 2026',
                toDate: 'May 2026',
            },
        ],
    },
    {
        company: {
            name: 'McGill Robotics',
            url: 'https://mcgillrobotics.com',
            logo: {
                type: 'img',
                value: mcgillRoboticsLogo,
            },
        },
        positions: [
            {
                title: 'AUV Software Engineer',
                // Highlights: Optimization, Docker, Migration
                description: `Refactored the Dockerized Unity simulation to improve code clarity and cut frame times by ~50%. Contributed to a critical stack migration from ROS 1 to ROS 2 and led a documentation overhaul to accelerate developer onboarding.`,
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
