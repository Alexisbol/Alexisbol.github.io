export const categories = [
    { id: 'all', name: 'All' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'ai', name: 'AI' },
    { id: 'systems', name: 'Systems' },
]

type CategoryId = 'robotics' | 'ai' | 'systems'

import type { ImageMetadata } from 'astro'
import abs1 from '../assets/logos-icons/ABS_1.png'
import abs2 from '../assets/projects/ABS_2.jpg'
import aquabotImg from '../assets/projects/Aquabot.png'
import aquabot2Img from '../assets/projects/Aquabot_2.png'
import northernStarImg from '../assets/projects/Hackathon_dog_1.png'
import sumoBotImg from '../assets/projects/sumo_bot.jpg'
import lerobotImg from '../assets/projects/hackathon.webp'

export interface ProjectProps {
    title: string // Title of the project
    summary: string // Short (~250-300 character) summary of the project, shown on the project card
    fromDate: string // Start date of the project, formatted as `Mon YYYY`
    toDate?: string // End date of the project, formatted as `Mon YYYY`, optional (for ongoing projects)
    categories: CategoryId[] // Categories the project belongs to, e.g., ['robotics', 'ai'] (at least one required)
    technologies: string[] // Technologies used in the project, e.g., ['python', 'ros2']
    repoUrl?: string // URL to the project's source code repository, optional
    postUrl?: string // URL to a blog post about the project, optional
    liveUrl?: string // URL to the live demo of the project, optional
    coverMedia: number | number[] // Index (or indices) of the media item(s) to use as the cover image (0-based)
    media: {
        type: 'image' | 'video'
        src: string | ImageMetadata // Source URL of the media or imported ImageMetadata
        alt?: string // Alternative text for the media, optional
    }[] // Media associated with the project, can be images or videos
}

export const projects: ProjectProps[] = [
    {
        title: 'Northern-Star — Robotic Guide Dog',
        summary:
            'RoboHack2026 (EPFL) hackathon project: programmed a robotic guide dog with GPS-based global navigation and agentic natural language interaction for real-time guidance. Implemented autonomous path planning and human interaction in a 48-hour challenge.',
        fromDate: 'Apr 2026',
        toDate: 'Apr 2026',
        categories: ['robotics', 'ai'],
        technologies: ['python', 'ros2'],
        coverMedia: 0,
        media: [{ type: 'image', src: northernStarImg }],
    },
    {
        title: 'Aquabot — Autonomous Surface Vehicle',
        summary:
            'Led a team of 5 in the Aquabot 2024 autonomous boat challenge with Naval Group. Programmed ROS2 nodes for GPS waypoint navigation and reactive control to handle swell and wind disturbances on an autonomous surface vehicle.',
        fromDate: 'Jun 2024',
        toDate: 'Jun 2024',
        categories: ['robotics'],
        technologies: ['python', 'ros2', 'cpp'],
        coverMedia: [1, 0],
        media: [{ type: 'image', src: aquabotImg }, { type: 'image', src: aquabot2Img }],
    },
    {
        title: 'LeRobot — RL on a Robotic Arm',
        summary:
            'Hugging Face LeRobot hackathon: trained a reinforcement learning policy for manipulation on a low-cost robotic arm. Explored reward shaping and domain randomization techniques to achieve reliable task completion.',
        fromDate: 'Jun 2024',
        toDate: 'Jun 2024',
        categories: ['robotics', 'ai'],
        technologies: ['python', 'lerobot'],
        coverMedia: 0,
        media: [{ type: 'image', src: lerobotImg }],
    },
    {
        title: 'Sumo Bot',
        summary:
            'Built a differential-wheeled autonomous sumo robot from scratch for a competition. Designed the mechanical structure and programmed reactive behavior to detect and engage opponents while staying inside the arena boundary.',
        fromDate: 'Mar 2024',
        toDate: 'Apr 2024',
        categories: ['robotics', 'systems'],
        technologies: ['arduino', '3dprinting'],
        coverMedia: 0,
        media: [{ type: 'image', src: sumoBotImg }],
    },
    {
        title: 'Bicycle Anti-Lock Braking System',
        summary:
            'Conducted a feasibility study of an ABS system applied to bicycles and built a working prototype using an Arduino and 3D-printed parts. Collaborated with a senior e-VTT engineer from Décathlon to validate the design and mechanical choices.',
        fromDate: 'Sep 2023',
        toDate: 'Jan 2024',
        categories: ['robotics', 'systems'],
        technologies: ['arduino', '3dprinting'],
        coverMedia: [1, 0],
        media: [
            { type: 'image', src: abs1 },
            { type: 'image', src: abs2 },
        ],
    },
]
