export interface TechProps {
    title: string
    url: string
    logo: {
        type: 'img' | 'svg' | 'html'
        value: string | ImageMetadata | ((props: any) => any)
    }
}

import pythonLogo from '../assets/logos-icons/python-logo-only-cropped.png'
import javaLogo from '../assets/logos-icons/java-logo-small.svg'
import cLogo from '../assets/logos-icons/c-logo.svg'
import cppLogo from '../assets/logos-icons/c++-logo.svg'
import jsLogo from '../assets/logos-icons/js-logo.svg'
// import tsLogo from '../assets/logos-icons/typescript-logo.svg'
import unrealLogo from '../assets/logos-icons/unreal-engine-logo.svg'
import unityLogo from '../assets/logos-icons/unity-logo.svg'
import flaskLogo from '../assets/logos-icons/flask-logo-cropped.png'
import sqliteLogo from '../assets/logos-icons/sqlite-logo.svg'
import tailwindLogo from '../assets/logos-icons/tailwindcss-mark.d52e9897.svg'
import zookeeperLogo from '../assets/logos-icons/apache-zookeeper-logo.png'
import openaiLogo from '../assets/logos-icons/OpenAI-white-monoblossom.svg'
import opencvLogo from '../assets/logos-icons/opencv-logo.webp'
import modernglLogo from '../assets/logos-icons/moderngl-logo.png'
import ollamaLogo from '../assets/logos-icons/ollama-logo.png'
import geminiLogo from '../assets/logos-icons/gemini-logo.svg'
import dspyLogo from '../assets/logos-icons/dspy-logo.png'
import cvxpyLogo from '../assets/logos-icons/cvxpy-logo-light.png'
import casadiLogo from '../assets/logos-icons/casadi-logo-light.svg'
import webotsLogo from '../assets/logos-icons/webots-logo.png'
import thymioLogo from '../assets/logos-icons/thymio-logo.png'

export const technologies: Record<string, TechProps> = {
    python: {
        title: 'Python',
        url: 'https://www.python.org/',
        logo: { type: 'img', value: pythonLogo },
    },
    java: {
        title: 'Java',
        url: 'https://www.java.com/',
        logo: { type: 'svg', value: javaLogo },
    },
    c: {
        title: 'C',
        url: 'https://www.c-language.org/',
        logo: { type: 'svg', value: cLogo },
    },
    cpp: {
        title: 'C++',
        url: 'https://isocpp.org/',
        logo: { type: 'svg', value: cppLogo },
    },
    js: {
        title: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        logo: { type: 'svg', value: jsLogo },
    },
    // ts: {
    //     title: 'TypeScript',
    //     url: 'https://www.typescriptlang.org/',
    //     logo: { type: 'svg', value: tsLogo },
    // },
    unreal: {
        title: 'Unreal Engine',
        url: 'https://www.unrealengine.com/',
        logo: { type: 'svg', value: unrealLogo },
    },
    unity: {
        title: 'Unity',
        url: 'https://unity.com/',
        logo: { type: 'svg', value: unityLogo },
    },
    flask: {
        title: 'Flask',
        url: 'https://flask.palletsprojects.com/',
        logo: { type: 'img', value: flaskLogo },
    },
    htmx: {
        title: 'htmx',
        url: 'https://htmx.org/',
        logo: {
            type: 'html',
            value: `
            <div class="font-bold h-full flex items-center justify-center" style="font-size: 110%;">
                &lt;<span class="text-blue-400">/</span>&gt; htm<span class="text-blue-400">x</span>
            </div>
            `,
        },
    },
    sqlite: {
        title: 'SQLite',
        url: 'https://sqlite.org/',
        logo: { type: 'svg', value: sqliteLogo },
    },
    tailwind: {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        logo: { type: 'svg', value: tailwindLogo },
    },
    zookeeper: {
        title: 'Apache ZooKeeper',
        url: 'https://zookeeper.apache.org/',
        logo: { type: 'img', value: zookeeperLogo },
    },
    openai: {
        title: 'OpenAI',
        url: 'https://openai.com/api/',
        logo: { type: 'svg', value: openaiLogo },
    },
    opencv: {
        title: 'OpenCV',
        url: 'https://opencv.org/',
        logo: { type: 'img', value: opencvLogo },
    },
    moderngl: {
        title: 'ModernGL',
        url: 'https://moderngl.readthedocs.io/',
        logo: { type: 'img', value: modernglLogo },
    },
    alfworld: {
        title: 'ALFWorld',
        url: 'https://alfworld.github.io/',
        logo: { type: 'html', value: 'ALFWorld' },
    },
    ollama: {
        title: 'Ollama',
        url: 'https://ollama.com/',
        logo: { type: 'img', value: ollamaLogo },
    },
    gemini: {
        title: 'Gemini API',
        url: 'https://ai.google.dev/gemini-api/docs/',
        logo: { type: 'svg', value: geminiLogo },
    },
    dspy: {
        title: 'DSPy',
        url: 'https://dspy.ai/',
        logo: { type: 'img', value: dspyLogo },
    },
    cvxpy: {
        title: 'CVXPY',
        url: 'https://www.cvxpy.org/',
        logo: { type: 'img', value: cvxpyLogo },
    },
    casadi: {
        title: 'CasADi',
        url: 'https://web.casadi.org/',
        logo: { type: 'img', value: casadiLogo },
    },
    webots: {
        title: 'Webots',
        url: 'https://cyberbotics.com/',
        logo: { type: 'img', value: webotsLogo },
    },
    thymio: {
        title: 'Thymio',
        url: 'https://www.thymio.org/',
        logo: { type: 'img', value: thymioLogo },
    },
}

/*
'python': '/images/python-logo-only-cropped.png',
'java': '/images/java-logo-small.svg',
'c++': '/images/c++-logo.svg',
'javascript': '/images/js-logo.svg',
'unreal-engine': '/images/unreal-engine-logo.svg',
'unity': '/images/unity-logo.svg',
'flask': '/images/flask-logo-cropped.png',
'htmx': '/images/htmx-logo.png',
'sqlite': '/images/sqlite-logo.svg',
'tailwindcss': '/images/tailwindcss-mark.d52e9897.svg',
'apache-zookeeper': '/images/apache-zookeeper-logo.png',
'opencv': '/images/opencv-logo.webp',
'moderngl': '/images/moderngl-logo.png',
*/
