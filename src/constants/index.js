import { html , css , js , tailwind , bootstrap , react, java ,spring, springboot , mysql , php , laravel,
  vscode, eclipse , github , git , slack, trello, intellij, docker , emailjs
} from "../assets";
import React from "react";

export const navLinks = [

  {
    id: "about",
    title: "About",
  },

  {
    id: "experiences",
    title: "Experiences",
  },
  
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const aboutData = [
    {
        title: "Frontend Development",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        ),
        description: "Between design and functionality. I breathe life into static designs, transforming them into interactive and responsive user interfaces.",
    },
    {
        title: "Problem Solving",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-shield-check w-6 h-6"
                viewBox="0 0 16 16"
            >
                <path
                    d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
                />
                <path
                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
            </svg>
        ),
        description: "I thrive on tackling challenges and finding innovative solutions. Resolving technical issues, or brainstorming creative solutions.",
    },
    {
        title: "Backend Development",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
            </svg>
        ),
        description: "From efficient API integration to dynamic database management and server-side logic, I create robust and scalable solutions.",
    },
];

export const experiences = [
    {
        date: "Sept 2020 - June 2022",
        title: "Ecole Nationale des Sciences Appliquées Oujda",
        text: "Preparatory Cycle - Sciences and Techniques for Engineering. Algorithms and C Programming Language",
    },
    {
        date: "Sept 2022 - June 2023",
        title: "Ecole Nationale des Sciences Appliquées Oujda",
        text: "Bachelor's Degree in Computer Engineering. Studied the following technologies:",
        technologies: [
            "Programming languages: C++, Java (Basics and Object-Oriented Programming)",
            "Data Structures",
            "Database Management: SQL and PL/SQL (MySQL and Oracle)",
            "Web Development: HTML, CSS, JavaScript",
            "Design Tools: UML, Merise",
            "Other: XML, PHP"
        ]
    },
    {
        date: "June 15, 2023 - July 15, 2023",
        title: "Internship at FCPO Web Development Agency",
        text: "During this one-month internship, gained practical experience in web development at FCPO Web Development Agency. Received an internship certificate.",
        linkText: "View Certificate",
        linkUrl: "https://www.linkedin.com/in/douae-el-hila-252809244/overlay/certifications/1887351806/multiple-media-viewer/?profileId=ACoAADyh3h4B5CwX9BW9Ox7cxrIwsOti71243do&treasuryMediaId=1704841885982",
    },
    {
        date: "Sept 2023 - June 2024",
        title: "Ecole Nationale des Sciences Appliquées Oujda",
        text: "Continued Bachelor's Degree in Computer Engineering with focus on the following technologies:",
        technologies: [
            "Web Development Frameworks: React.js, Laravel",
            "Java Framework: Spring",
            "Design Patterns",
            "Project Management Methodologies: Agile (Scrum, Kanban)",
            "Distributed Systems and Microservices"
        ]
    },
    {
        date: "April 2024",
        title: "AmigosCode - Spring Boot for Beginners",
        text: "Completed this course offered by AmigosCode. Covered fundamental concepts of Spring Boot, including setting up a Spring Boot application, building RESTful APIs, and integrating with databases.",
        linkText: "View Certificate",
        linkUrl: "https://drive.google.com/file/d/12j8sCkLADZk_PHdRlL2M7Bo7irE4jCaY/view?usp=sharing",
    },
    {
        date: "April 2024",
        title: "AmigosCode - Spring Security",
        text: "Completed this offered by AmigosCode. Explored advanced security features in Spring, including authentication, authorization, and securing RESTful APIs.",
        linkText: "View Certificate",
        linkUrl: "https://drive.google.com/file/d/1x30b-iKyqt7Yghjl65kZSjlljZBTNCH2/view?usp=sharing",
    },
];

export const skills = [
    { icon: html, tooltip: 'HTML' },
    { icon: css, tooltip: 'CSS' },
    { icon: js, tooltip: 'JavaScript' },
    { icon: tailwind, tooltip: 'Tailwind CSS' },
    { icon: bootstrap, tooltip: 'Bootstrap' },
    { icon: react, tooltip: 'React Js' },
    { icon: java, tooltip: 'Java' },
    { icon: spring, tooltip: 'Spring' },
    { icon: springboot, tooltip: 'Spring Boot' },
    { icon: mysql, tooltip: 'MySQL' },
    { icon: php, tooltip: 'PHP' },
    { icon: laravel, tooltip: 'Laravel' },
    { icon: emailjs, tooltip: 'Email Js' },
];

export const tools = [
    { icon: intellij, tooltip: 'IntelliJ' },
    { icon: vscode, tooltip: 'Vs Code' },
    { icon: eclipse, tooltip: 'Eclipse IDE' },
    { icon: docker, tooltip: 'Docker' },
    { icon: github, tooltip: 'GitHub' },
    { icon: git, tooltip: 'Git' },
    { icon: slack, tooltip: 'Slack' },
    { icon: trello, tooltip: 'Trello' },


];

export const projects = [
    {
        name: "BlogBurst Blog Website",
        duration: "3 months",
        methodology: "Agile Methodology - Scrum, with 3 team members and 3 sprints.",
        content: "Platform designed for blogging experiences. Administrators can manage users, categories, and posts, while users contribute content to public pages or specific categories. The platform encourages active participation of content creators.",
        img: "blog.png",
        technologies: [0, 1, 2, 10, 9],
        href: "https://github.com/douaeelh2/blog",
    },
    {
        name: "Home Renovation Services",
        duration: "1 month",
        methodology: "Agile Methodology - Scrum, with 2 team members and 1 sprint.",
        content: "Developed during my initiation internship. The application showcases the client's projects, their posts, their partners, and the services they offer such as Electricity, Plumbing, and Air Conditioning. Anyone interested can fill out a form on the desired service.",
        img: "hrs.png",
        technologies: [0, 1, 2, 4, 10, 9],
        href: "https://hrs.fcpo.agency",
    },
    {
        name: "Project Task Management",
        duration: "2 months",
        methodology: "Agile Methodology - Scrum, with 3 team members and 2 sprints.",
        content: "Comprehensive management site that enables teams to collaborate by tracking projects, tasks, and users. With a user-friendly interface, our site aims to simplify project planning, task assignment, and overall project management.",
        img: "project-task.png",
        technologies: [3, 5, 11, 9],
        href: "https://github.com/douaeelh2/Project-Task-Management",
    },
    {
        name: "PFE Management PMastery",
        duration: "2 months",
        methodology: "Agile Methodology - Scrum, with 4 team members and 2 sprints.",
        content: "This platform simplifies end-of-study project management by providing tools to coordinate supervisors, students, assignments, and defenses. It enables effortless allocation of projects, streamlined scheduling of defenses, and centralized organization.",
        img: "pmastery.png",
        technologies: [4, 5, 8, 7 , 9],
        href: "https://github.com/douaeelh2/ContactApp",
    },
    {
        name: "My Portfolio",
        duration: "1 month",
        content: "Explore my portfolio seamlessly integrated within the projects section. See firsthand how I leverage my full stack skills to create a cohesive user experience while showcasing my professional journey and technical expertise.",
        img: "portfolio.png",
        technologies: [3, 5, 12],
        href: "https://github.com/douaeelh2/MyPortfolio",
    },
    {
        name: "ContactApp Manager",
        duration: "1 month",
        methodology: "Agile Methodology - Scrum, with 3 team members and 1 sprint.",
        content: "This Mobile Application aims to provide contact management such as adding, editing, deleting, searching contacts, and displaying details for each contact.",
        img: "contactapp.png",
        technologies: [6],
        href: "https://github.com/douaeelh2/ContactApp",
    },
];


export const documents = [
    {
        technologie: skills[6].icon,
        title: "Java",
        description: "This documentation aims to provide an overview of fundamental Java concepts necessary for working with Spring Boot.",
        href: "https://github.com/douaeelh2/Java-Documentation",
    },
    {
        technologie: skills[7].icon,
        title: "Spring",
        description: "Comprehensive documentation for integrating and utilizing Spring Framework within your projects. It also includes prerequisites for Spring Boot.",
        href: "https://github.com/douaeelh2/Spring-Documentation",
    },
    {
        technologie: skills[8].icon,
        title: "Spring Boot",
        description: "This documentation serves as a comprehensive guide to understanding and using Spring Boot effectively, covering everything from getting started to advanced topics and best practices.",
        href: "https://github.com/douaeelh2/Spring-Boot-Documentation",
    },
    {
        technologie: tools[3].icon,
        title: "Docker",
        description: "This comprehensive guide is designed to help you understand and utilize Docker, an open platform for developing, shipping, and running applications inside containers.",
        href: "https://github.com/douaeelh2/Docker-Documentation",
    },
];

export const socialMedia = [
  {
    id: "facebook",
    icon: React.createElement('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "currentColor",
          className: "bi bi-github",
          viewBox: "0 0 16 16"
        },
        React.createElement('path', {d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
        })
    ),
    link: "https://github.com/douaeelh2",
  },

  {
    id: "instagram",
    icon: React.createElement('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "currentColor",
          className: "bi bi-instagram",
          viewBox: "0 0 16 16"
        },
        React.createElement('path', {d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"})
    ),
    link: "https://www.instagram.com/douaeelhilaa/?igsh=MjRtemJ6MWxqa2xz&utm_source=qr",
  },
  {
    id: "linkedin",
    icon: React.createElement('svg', {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          fill: "currentColor",
          className: "bi bi-linkedin",
          viewBox: "0 0 16 16"
        },
        React.createElement('path', {d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"})
    ),
    link: "https://www.linkedin.com/in/douae-el-hila-252809244/",
  },
];