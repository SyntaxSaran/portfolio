import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const socialLinks = [
  {link:"https://github.com/Slayer-Saran-2002",icon:IconBrandGithub},
  {link:"https://www.linkedin.com/in/saranjeet-mondal-119456234/",icon:IconBrandLinkedin},
  {link:"https://instragam.com/_k.n.o.w.n_stranger_/",icon:IconBrandInstagram},
  {link:"https://leetcode.com/u/saran2002/",icon:IconBrandLeetcode},
];
const ProjectInfo = [
  {
    title: "XpressMart E-commerce App",
    desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
    image: "Ekart.png",
    live: true,
    technologies: ["React", "TailwindCSS", "Redux", "Heroicons", "HeadlessUI"],
    link: "https://code-mars.github.io/Ekart/",
    github: "https://github.com/Code-Mars/Ekart"
  },
  {
    title: "Weather Wizard",
    desc: "Weather Wizard is a sleek and user-friendly weather application that provides real-time weather updates for any location worldwide. Built with React, TailwindCSS, and OpenWeather API, it offers features like current weather conditions, 7-day forecasts, and interactive weather maps. Users can search by city, save their favorite locations, and receive alerts for severe weather conditions. The app is optimized for both mobile and desktop, ensuring a seamless experience across all devices.",
    image: "weather-wizard.png",
    live: true,
    technologies: ["React", "TailwindCSS", "OpenWeatherAPI"],
    link: "https://your-site.github.io/WeatherWizard/",
    github: "https://github.com/your-github/WeatherWizard"
  },
  {
    title: "Facebook Clone",
    desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, real-time chat, and a newsfeed. Built using React, Firebase, and TailwindCSS, it offers a highly interactive and responsive user experience. Users can post status updates, upload photos, and engage with posts via likes and comments. Real-time notifications and chat functionality enhance the social networking experience. The app's design focuses on user-friendliness and accessibility, making it a powerful tool for learning full-stack development.",
    image: "Facebook.png",
    live: false,
    technologies: ["React", "Firebase", "TailwindCSS"],
    link: "https://code-mars.github.io/FacebookClone/",
    github: "https://github.com/Code-Mars/FacebookClone"
  }
];
const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Next JS",
      "Angular",
      "Redux",
      "Vue JS",
      "Tailwind CSS",
      "Material UI",
      "SASS",
      "Bootstrap",
      "GSAP",
      "TypeScript",
      "Chakra UI"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Node JS",
      "Express JS",
      "Nest JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "Kubernetes",
      "Redis",
      "Microservices"
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Nginx",
      "AWS",
      "Azure",
      "GCP",
      "Linux",
      "Webpack",
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "C Sharp",
      "Ruby",
      "Go",
      "Rust"
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin"
    ]
  },
  {
    title: "Testing",
    skills: [
      "Jest",
      "Mocha",
      "Cypress",
      "Selenium"
    ]
  }
];
const ExperienceInfo = [
  {
    role: "System Engineer ",
    company: "TCS",
    duration: "Jul 2024 - Present ",
    description: "I collaborate on designing and maintaining scalable enterprise systems, ensuring high performance and reliability. My role involves developing software solutions, optimizing system architecture, and working with cloud technologies, CI/CD pipelines, and modern backend frameworks.",
    skills: ["Java", "Python", "MySQL", "PLSQL"]
  },
  {
    role: "Web Developer",
    company: "INDO-LONDON Infotech",
    duration: "Oct 2022 - Feb 2024",
    description: "I was web dev intern at INDO-LONDON Infotech.",
    skills: ["React JS", "Angular JS", "MongoDB", "Selenium", "Firebase", "GraphQL"]
  }
];
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export { socialLinks,ProjectInfo, SkillInfo, ExperienceInfo,slugs };