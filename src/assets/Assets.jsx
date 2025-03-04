import Munish from './Images/Munish.png';
import MEI from './Images/MEI.png';
import AllenBradley from './Images/AllenBradley.png';
import FEDeveloper from './Images/FEDeveloper.png';
import FEDeveloper1 from './Images/FEDeveloper1.png';
import SchneiderElectric from './Images/SchneiderElectric.png';
import RA from './Images/RA.png';
import CBSE from './Images/CBSE.png';
import BTEDelhi from './Images/BTEDelhi.jpg';
import KSOU from './Images/KSOU.jpg';
import UXDesigner from './Images/UXDesigner.jpg';
import journeyImage from './Images/journeyImage.png';
import GoogleUXDesign  from './Images/GoogleUXDesign.png';

const updated = 'January 2025';

export const images = {
    Munish, journeyImage, GoogleUXDesign
}


export const contactFormItems = [
    {
        id: 1,
        type: 'text',
        label: 'First Name*',
        placeholder: 'First Name',
        isRequired: 'true',
    },
    {
        id: 2,
        type: 'text',
        label: 'Last Name*',
        placeholder: 'Last Name',
        isRequired: 'true',
    },
    {
        id: 3,
        type: 'email',
        label: 'Email*',
        placeholder: 'Email',
        isRequired: 'true',
    },
    {
        id: 4,
        type: 'number',
        label: 'Mobile*',
        placeholder: 'Mobile',
        isRequired: 'true',
    },
    {
        id: 5,
        type: 'text',
        label: 'Type Your Message*:',
        placeholder: 'Type Your Message',
        isRequired: 'true',
        
    },
]

export const expDetails = [
    {
        id: 1,
        image: FEDeveloper,
        year: '2024 - Present',
        duration: '06 Months',
        position: 'Learner (Front End Development)',
        companyName: 'Techlive Solutions',
        location: 'Mohali',
        lastUpdated: updated,
        shortDetails: 'Learned Front End Development (HTML, CSS, Javascript, Bootstrap, React), React components, Functions, Hooks, State Management, Event Handling, Validations, Error Handling etc.',
        fullDetails: ['Learned basic concepts of Web Development', 
            'Learned about HTML, CSS and Javascript',
            'Learned Bootstrap', 
            'Learned basic concepts and components of React', 
            'Learned about Functions',
            'Learned about Validations',
            'Learned about Event & Error Handling',
            'Learned about State Management',
            'Learned about Hooks',
        ],
    },
        {
        id: 2,
        image: MEI,
        year: '2024',
        duration: '08 Months',
        position: 'GM - Projects',
        companyName: 'RANK ROBOTICS (Mitsubishi Electric India Ltd.)',
        location: 'Chandigarh',
        lastUpdated: updated,
        shortDetails: 'Project Management, Team Development',
        fullDetails: [
            'Project Management',
            'Team Development',
            'Acquisition of new Talent',
            'Explore new Business Verticles',
        ],
    },
    {
        id: 3,
        image: GoogleUXDesign,
        year: '2023',
        duration: '06 Months',
        position: 'Learner (Google Certified UI/UX Designing)',
        companyName: 'Coursera',
        location: 'online',
        lastUpdated: updated,
        verify: 'https://coursera.org/verify/professional-cert/VTHBK56LJ9A3',
        shortDetails: 'Design Thinking Principles, User Research & Usability Testing, User Flow, Lo-Fi/Hi-Fi Mock-ups, Wireframing & Prototyping, Design System, Information Architecture and, Collaboration.',
        fullDetails: [
            'Design Thinking Principles',
            'User Research & Usability Testing', 
            'User Flow Diagram', 
            'Lo-Fi/ Hi-Fi Mock-ups',
            'Lo-Fi/ Hi-Fi Wireframing & Prototyping',
            'Design System',
            'Information Architecture and',
            'Collaboration',
            'Tools used: Figma',
        ],
    },
    {
        id: 4,
        image: RA,
        year: '2009 - 2023',
        duration: '14 Years',
        position: 'Trainer/ Liasoning',
        companyName: 'Self Employed',
        location: 'Yamuna Nagar',
        lastUpdated: updated,
        shortDetails: 'Liasioning & consultancy to Schools for getting ATL Grant and Providing training on technologies & tools related to ATL e.g. IOT, Microcontrollers - Arduino & Raspberry pi, 3D Printing etc.',
        fullDetails: [
            'Providing consultancy to Schools for getting ATL Grant.',
            'Providing training on technologies & tools related to ATL e.g. IOT, Microcontrollers - Arduino & Raspberry pi, 3D Printing, Drones to School Teachers & Students.',
            'Providing training on Basic Computer Skills to School Teachers & Students.',
        ],
    },
    {
        id: 5,
        image: MEI,
        year: '2008 - 2009',
        duration: '01 Year',
        position: 'Branch Manager',
        companyName: 'Mitsubishi Electric India Ltd.',
        location: 'Panchkula',
        lastUpdated: updated,
        shortDetails: 'Responsible for Business Development Activities in Punjab, Haryana and Himachal Pradesh Region.',
        fullDetails: [
            'Business Development Activities',
            '',
        ],
    },
    {
        id: 6,
        image: SchneiderElectric,
        year: '2006 - 2008',
        duration: '02 Years',
        position: 'Manager - Technical Service Center',
        companyName: 'Schneider Electric India Ltd.',
        location: 'New Delhi',
        lastUpdated: updated,
        shortDetails: 'Oversaw the establishment of a fully operational Technical Service Center (TSC) to deliver online support across 10 Southeast Asian countries, including India, Singapore, and South Korea. Ensured the provision of specialized technical assistance to customers, employees, and stakeholders.',
        fullDetails: [
            'Responsible for establishment of fully operational Technical Service Center (TSC).', 
            'Established a lab for simulation purposes to develop solutions for real-world problems.', 
            'Leading highly skilled Support Engineers.', 
            'Skill upgradation of Team members as per the current requirements and SOPs.',
            'To ensure highly specialized technical support (Industrial Automation) online to the customers, Employees, and stakeholders to 10 South East Asian countries including Singapore, Thailand and South Korea. ',
        ],
    },
    {
        id: 7,
        image: RA,
        year: '2004 - 2006',
        duration: '04 Years',
        position: 'Support Manager - Northern Region',
        companyName: 'Rockwell Automation India Ltd.',
        location: 'New Delhi',
        lastUpdated: updated,
        shortDetails: 'To ensure online and offline support to the customers in North India. Leading highly skilled Engineers for customer support activities. Providing trainings to the customers, employees and stakehlders on RA Automation products (on-site and at our service center).',
        fullDetails: [
            'To ensure online and offline support to the customers in Northern Region.',
            'Leading highly skilled Engineers for customer support activities.',
            'Large sized End-Users served like e.g. Chambal Fertilizers, HZL, Semiconductor Devices, NALCO etc.',
            'Providing trainings to the customers, employees and stakehlders on RA Automation products (on-site and at our service center).',
        ],
    },
    {
        id: 8,
        image: AllenBradley,
        year: '1996 - 2004',
        duration: '08 Years',
        position: 'Application Engineer',
        companyName: 'Rockwell Automation India Ltd.',
        location: 'New Delhi',
        lastUpdated: updated,
        shortDetails: 'Control System Designing, Erection and Commissioning for various types of Industrial Machines and processes. Ladder Logic development, HMI Programming, SCADA application development, troubleshooting. Worked with OEMs to help them develop & retrofit various SPM’s.',
        fullDetails: ['Control System Designing, Erection and Commissioning for various types of Industrial Machines and processes.', 
            'Ladder Logic development, HMI Programming, SCADA application development, troubleshooting.',
            'Worked on various PLC Platforms of RA e.g. Micrologix (1000/ 1200/ 1500), SLC, PLC-5, Contrologix, SCADA (RSView), HMI (Panelview), AC Drives etc.',
            'Projects executed in many larges scale End-Users e.g. Tata Motors, Hyundai Motors, Sumi Motherson, Modi Rubber, ITC, NALCO, Panipat Refinery just to name a few.',
            'Worked with OEMs to help them develop & retrofit various SPM’s.', 
        ],
    },    
]

export const qualDetails = [
    {
        id: 1,
        image: FEDeveloper,
        year: '2025',
        duration: '06 Months',
        universityName: 'Techlive Solutions',
        degree: 'Front End Developer',
        location: 'Mohali',
        lastUpdated: updated,
        details: 'More details...',
    },
    {
        id: 2,
        image: UXDesigner,
        year: '2023',
        duration: '06 Months',
        universityName: 'Coursera (by Meta)',
        degree: 'Google Certified UI/ UX Designer',
        location: 'Online Mode',
        lastUpdated: updated,
        details: 'More details...',
    },
    {
        id: 3,
        image: KSOU,
        year: '2014',
        duration: '02 Years',
        universityName: 'Karnataka State Open University',
        degree: 'Executive MBA (IT)',
        location: 'Distance Education',
        lastUpdated: updated,
        details: 'More details...',
    },
    {
        id: 4,
        image: BTEDelhi,
        year: '1996',
        duration: '03 Years',
        universityName: 'Board of Technical Education',
        degree: 'Instrumentation & Control Engineering',
        location: 'New Delhi',
        lastUpdated: updated,
        details: 'More details...',
    },    
    {
        id: 5,
        image: CBSE,
        year: '1995',
        duration: '01 Year',
        universityName: 'CBSE',
        degree: 'Senior Secondary (10+2)',
        location: 'New Delhi',
        lastUpdated: updated,
        details: 'More details...',
    },    
    {
        id: 6,
        image: CBSE,
        year: '1992',
        duration: '01 Year',
        universityName: 'CBSE',
        degree: 'High School (10th)',
        location: 'New Delhi',
        lastUpdated: updated,
        details: 'More details...',
    },    
]

export const itSkillDetails = [
    {
        id: 1,
        heading: 'Front End Development ',
        details:  '(HTML, CSS, JavaScript, React)',
        variant: 'danger',
        skillLevel: 40,
        label: 'Beginner',
        lastUpdated: updated,
    },
    {
        id: 2,
        heading: 'UX Designing ',
        details:  '(Figma)',
        variant: 'danger',
        skillLevel: 40,
        label: 'Beginner',
        lastUpdated: updated,
    },
    {
        id: 3,
        heading: 'IOT ',
        details:  '(Arduino, Raspberry Pi, 3D Printing)',
        variant: 'primary',
        skillLevel: 80,
        label: 'Intermediate',
        lastUpdated: updated,
    },
    {
        id: 4,
        heading: 'Programming Language ',
        details: '(C Programming)',
        variant: 'danger',
        skillLevel: 40,
        label: 'Beginner',
        lastUpdated: updated,
    },
    {
        id: 5,
        heading: 'Programming Language ',
        details:  '(Python)',
        variant: 'danger',
        skillLevel: 40,
        label: 'Beginner',
    },
]

export const DesigningSkillDetails = [
    {
        id: 1,
        heading: 'CorelDraw/ Inkscape ',
        details:  '',
        variant: 'primary',
        skillLevel: 80,
        label: 'Intermediate',
    },
    {
        id: 2,
        heading: 'UX Designing ',
        details:  '(Design Thinking Principles, User Research & Usability, Testing, User Flow, Lo-Fi/Hi-Fi, Mock-ups, Wireframing & Prototyping, Design System, Information Architecture, Collaboration)',
        variant: 'danger',
        skillLevel: 40,
        label: 'Beginner',
    },
    {
        id: 3,
        heading: 'Adobe Photoshop ',
        details: '',
        variant: 'danger',
        skillLevel: 40,
        label: 'Beginner',
    },
]

export const AutomationSkillDetails = [
    {
        id: 1,
        heading: 'PLC ',
        details:  '',
        variant: 'success',
        skillLevel: 100,
        label: 'Proficient',
    },
    {
        id: 2,
        heading: 'VFD ',
        details:  '(Variable Frequency Drives/ AC Drive)',
        variant: 'primary',
        skillLevel: 80,
        label: 'Intermediate',
    },
    {
        id: 3,
        heading: 'HMI ',
        details: '(Human Machine Interface/ Touch Screen Designing/ Programming)',
        variant: 'success',
        skillLevel: 100,
        label: 'Proficient',
    },
    {
        id: 4,
        heading: 'SCADA ',
        details: '(Supervisory Control & Data Acquisition - Designing/ Programming)',
        variant: 'success',
        skillLevel: 100,
        label: 'Proficient',
    },
    {
        id: 5,
        heading: 'Networking ',
        details: '(Networking of PLC and other Automation products)',
        variant: 'success',
        skillLevel: 100,
        label: 'Proficient',
    },
]

export const skillAccordion = [
    {
        id: 1,
        heading: 'IT Skills',
        lastUpdated: updated,
    },
    {
        id: 2,
        heading: 'Designing Skills',
        lastUpdated: updated,
    },
    {
        id: 3,
        heading: 'Automation Skills',
        lastUpdated: updated,
    },
    {
        id: 4,
        heading: 'Transferable Skills',
        lastUpdated: updated,
    },
]