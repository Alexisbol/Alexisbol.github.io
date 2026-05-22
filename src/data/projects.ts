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
import lerobotImg from '../assets/projects/hackathon.webp'
import lerobot2Img from '../assets/projects/lerobot_2.jpg'
import sp1Img from '../assets/projects/SP_1.png'
import pawsPlaceholderImg from '../assets/projects/PAWS_placeholder.jpg'
import sp2Img from '../assets/projects/SP_2.png'
import mpcImg from '../assets/projects/MPC.png'
import leggedRobotImg from '../assets/projects/Legged_robot.png'
import leggedRobot2Img from '../assets/projects/Legged_robot_2.png'
import leggedRobot3Img from '../assets/projects/Legged_robot_3.png'
import p3_1Img from '../assets/projects/P3_1.png'
import p3_2Img from '../assets/projects/P3_2.png'
import p3_3Img from '../assets/projects/P3_3.png'
import p3_4Img from '../assets/projects/P3_4.jpg'
import p3_5Img from '../assets/projects/P3_5.png'

export interface ProjectProps {
    title: string // Title of the project
    summary: string // Short (~250-300 character) summary of the project, shown on the project card
    type?: string // Type of project, e.g. 'Semester Project', 'Hackathon', 'Internship'
    location?: string // Lab or institution, e.g. 'Mathis Lab · EPFL', 'EPFL AI Team'
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
        title: 'Musculoskeletal Table Tennis',
        summary:
            'Semester project enhancing an RL agent to play table tennis using complex musculoskeletal models within the MyoSuite and MuJoCo frameworks. Developing an adaptable control policy capable of precise muscle coordination and rapid strategic decision-making.',
        type: 'Semester Project',
        location: 'Mathis Lab · EPFL',
        fromDate: 'Feb 2026',
        toDate: 'Jun 2026',
        categories: ['robotics', 'ai'],
        technologies: ['rsl-rl', 'mujoco', 'myosuite'],
        coverMedia: [0, 1],
        media: [
            { type: 'image', src: sp1Img },
            { type: 'image', src: sp2Img },
        ],
    },
    {
        title: 'Quadruped Locomotion',
        summary:
            'Developed quadruped locomotion policies with reinforcement learning using NVIDIA Isaac Lab. Worked on sim-to-sim and sim-to-real transfer to deploy the learned policy on the Unitree Go2 quadruped robot.',
        type: 'AI Team',
        location: 'EPFL AI Team',
        fromDate: 'Feb 2026',
        toDate: 'Jun 2026',
        categories: ['robotics', 'ai'],
        technologies: ['isaaclab'],
        coverMedia: 0,
        media: [{ type: 'image', src: pawsPlaceholderImg }],
    },
    {
        title: 'Robotic Guide Dog',
        summary:
            'RoboHack2026 (EPFL) hackathon project: programmed a robotic guide dog (code-name Northern-Star) with GPS-based global navigation and agentic natural language interaction for real-time guidance. Implemented autonomous path planning and human interaction in a 36-hour challenge.',
        type: 'Hackathon',
        location: 'EPFL',
        fromDate: 'Apr 2026',
        toDate: 'Apr 2026',
        categories: ['robotics', 'ai'],
        technologies: ['python', 'ros2', 'dimos'],
        coverMedia: 0,
        media: [{ type: 'image', src: northernStarImg }],
    },
    {
        title: 'Rocket Landing with MPC',
        summary:
            'A control project demonstrating autonomous rocket landing using Robust and Nonlinear Model Predictive Control (MPC). Engineered a 12-state NMPC for propulsive landing and Robust Tube MPC for vertical descent to guarantee collision avoidance under stochastic disturbances.',
        type: 'Course ME-425',
        location: 'EPFL',
        fromDate: 'Sep 2025',
        toDate: 'Jan 2026',
        categories: ['systems'],
        technologies: ['python', 'casadi', 'cvxpy'],
        coverMedia: 0,
        media: [{ type: 'image', src: mpcImg }],
    },
    {
        title: 'Legged Robot — Quadruped Locomotion',
        summary:
            'Explored two control approaches for quadruped locomotion on a Unitree A1 robot: gait synthesis with Central Pattern Generators (CPG) and deep reinforcement learning via DRL and CPG-RL algorithms. Simulations performed in a gym environment using Stable-Baselines3 and PyTorch.',
        type: 'Course MICRO-507',
        location: 'EPFL',
        fromDate: 'Sep 2025',
        toDate: 'Jan 2026',
        categories: ['robotics', 'ai'],
        technologies: ['sb3', 'mujoco'],
        coverMedia: [0, 1, 2],
        media: [
            { type: 'image', src: leggedRobotImg },
            { type: 'image', src: leggedRobot2Img },
            { type: 'image', src: leggedRobot3Img },
        ],
    },
    {
        title: '6-DOF Robotic Platform Control',
        summary:
            'Engineering internship developing a ROS2 controller for a 6-DOF RSS6 robotic platform. Integrated CANopen communication for actuator control, implemented forward and inverse kinematics models, and used motion capture to quantify positioning accuracy.',
        type: 'Internship',
        location: 'ISIR · Sorbonne',
        fromDate: 'Feb 2025',
        toDate: 'Jun 2025',
        categories: ['robotics', 'systems'],
        technologies: ['ros2', 'cpp', 'python'],
        coverMedia: [0, 1, 2, 3, 4],
        media: [
            { type: 'image', src: p3_1Img },
            { type: 'image', src: p3_2Img },
            { type: 'image', src: p3_3Img },
            { type: 'image', src: p3_4Img },
            { type: 'image', src: p3_5Img },
        ],
    },
    {
        title: 'Aquabot — Autonomous Surface Vehicle',
        summary:
            'Led a team of 5 in the Aquabot 2024 autonomous boat challenge with Naval Group. Programmed ROS2 nodes for GPS waypoint navigation and reactive control to handle swell and wind disturbances on an autonomous surface vehicle.',
        type: 'Challenge',
        location: 'École Centrale de Nantes',
        fromDate: 'Sep 2024',
        toDate: 'Dec 2024',
        categories: ['robotics'],
        technologies: ['ros2', 'gazebo', 'cpp', 'python'],
        coverMedia: [0, 1],
        media: [{ type: 'image', src: aquabotImg }, { type: 'image', src: aquabot2Img }],
    },
    {
        title: 'LeRobot — RL on a Robotic Arm',
        summary:
            'Hugging Face LeRobot hackathon: trained a reinforcement learning policy for manipulation on a low-cost robotic arm. Explored reward shaping and domain randomization techniques to achieve reliable task completion.',
        type: 'Hackathon',
        location: 'HuggingFace',
        fromDate: 'Jun 2024',
        toDate: 'Jun 2024',
        categories: ['robotics', 'ai'],
        technologies: ['lerobot'],
        coverMedia: [0, 1],
        media: [{ type: 'image', src: lerobot2Img }, { type: 'image', src: lerobotImg }],
    },
    {
        title: 'Bicycle Anti-Lock Braking System',
        summary:
            'Conducted a feasibility study of an ABS system applied to bicycles and built a working prototype using an Arduino and 3D-printed parts. Collaborated with a senior e-VTT engineer from Décathlon to validate the design and mechanical choices.',
        type: 'Project',
        location: 'Lycée Chaptal',
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
