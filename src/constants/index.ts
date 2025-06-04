import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vue,
  kiritek,
  citelis,
  blueyonder,
  topdoctors,
} from "../assets";
import { Mail, Github, Linkedin } from "lucide-react";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Consultant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr Frontend Developer",
    company_name: "Kiritek",
    icon: kiritek,
    iconBg: "#E6DEDD",
    date: "Feb 2017 - Feb 2020",
    points: [
      "Created and optimized a neighborhood system called “MyFrac” using React JS, API Context, Java, AWS.",
      "Colaboration with the desing team for define breakpoints for mobile version.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I created from scratch a system for selling memberships for the “Trees Marías” golf club using Vue 2, Vuex and Bootstrap.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Citelis",
    icon: citelis,
    iconBg: "#383E56",
    date: "Feb 2020 - April 2022",
    points: [
      "Developed from scratch an E-Commerce for “SIGO” for buying and sales of used cars using Next and React JS, also using GraphQL, Java and PostgresQL for the backend.",
      "Implementation of best practices in SEO.",
      "Implemented a CRM for Jac Mexico using Flutter, GraphQL and Java, improving the sales process and client tracking.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Blueyonder",
    icon: blueyonder,
    iconBg: "#E6DEDD",
    date: "April 2022 - Aug 2024",
    points: [
      "Developed a React.js component library to optimize internal application development through storybook, context API and Styled Components.",
      "Focused on performance, accessibility, and usability in every component through WCAG standards.",
      "Collaborated with the backend teams to ensure seamless integration using tools such as Azure Repos, Azure Pipelines for CI/CD.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SrFrontend Developer",
    company_name: "Top Doctors",
    icon: topdoctors,
    iconBg: "#383E56",
    date: "Aug 2022 - May 2025",
    points: [
      "Implemented and migrated a hospital management platform using React 16.",
      "Increased project scalability by migrating to React from AngularJS using MERN stack.",
      "Enhanced UI adaptability by implementing responsive components.",
      "Developed reusable components to improve team efficiency using React, Material UI and Storybook.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sergio became a key member of the team. The quality of his deliverables and the support he provided to his less experienced colleagues were crucial to the organization's growth.",
    name: "Xavier Bastidas",
    designation: "Engineering Manager",
    company: "Blueyonder",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGcOLuzNAsXVg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1657239695105?e=1754524800&v=beta&t=oh7qQucRUZ7mEcYhYBKQxhbPH_FHPjdVS1KLgOM3gSQ",
  },
  {
    testimonial:
      "Sergio always demonstrated himself to be a person of integrity, loyalty, commitment, and a very capable teammate.",
    name: "Ignacio Mota",
    designation: "CTO",
    company: "Legalex GS",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEuvJ6q9Tqi8w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1604520625039?e=1754524800&v=beta&t=6SeUGLYHoP5QJGoM9YpDTy8IQy4L-KacmVAjeRlsrVs",
  },
  {
    testimonial:
      "After Sergio optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ben Francis",
    designation: "CTO",
    company: "Top Doctors",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEYL6_UPJ66lw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655902186895?e=1754524800&v=beta&t=dJnS8b3Qe7DJRzkLbhJayNM_dD36y8YNBgvIyfhvF4g",
  },
];

const socialMedia = [
  {
    href: "https://github.com/sergio-monjaraz-ramirez",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/sergio-monjaraz-ramirez/",
    icon: Linkedin,
  },
  {
    href: "mailto:mta.sergio.monjaraz@gmail.com",
    icon: Mail,
  },
];

export { services, technologies, experiences, testimonials, navLinks, socialMedia };
