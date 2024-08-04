import { Link } from "react-router-dom";
import certificateImage from '../assets/Certificates/cer.jpg';
import certiImage from '../assets/Certificates/hacktheleague.jpeg';
import seImage from '../assets/Certificates/se.png';
import ciscoImg from '../assets/Certificates/cisco.png';
import dataImg from '../assets/Certificates/data.png';
import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    express,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    hack4purpose,
    hack,
    nptel,
    cisco,
    backend,
    carrent,
    jobit,
    study,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "Home",
    },
    {
      id: "about",
      title: "About ",
    },
    {
      id: "skills",
      title: "Skills ",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact Me",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Specialist",
      icon: mobile,
    },
    {
      title: "Backend Architect",
      icon: backend,
    },
    {
      title: "DSA Enthusiast",
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
      name: "React JS",
      icon: reactjs,
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
      name:"express",
      icon:express,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    
  ];
  
  const experiences = [
    {
      title: "Hack4Purpose Hackathon",
      location: "Chennai",
      icon: hack4purpose,
      points: [
        "Hack4Purpose is a hackathon aimed at developing tech solutions for environmental and social issues.",
        "It focuses on sustainability and encourages projects that promote eco-friendly practices.",
        "The event fosters collaboration among diverse participants and provides mentorship and resources.",
        "Our team was among the top 100 out of over 8,500 applications, receiving recognition for our innovative and impactful project.",
      ],
      certificateUrl:certificateImage, 
    },
    {
      title: "Hack The League Chapter-3",
      location: "Jaipur",
      icon: hack,
      points: [
        "Hack The League Chapter 3 is an innovative hackathon that blends anime themes with technology to solve real-world problems and transform realities.",
        "This event encourages participants to challenge the status quo by creating groundbreaking solutions.",
        "It offers mentorship, workshops, and prizes, providing a comprehensive environment for collaboration and learning. ",
        "This hackathon is more than just coding; it's a call to revolutionize and make a lasting impact on the world.",
      ],
      certificateUrl: certiImage, 
    },

    {
      title: "Software Engineering ",
      icon: nptel,
      points: [
        "Awarded by NPTEL for successfully completing the Software Engineering course with a consolidated score of 51%.",
        "The course, involved rigorous online assignments (scoring 21.19/25) and a proctored exam (scoring 30/75).",
        "This certification, recognized by the Indian Institute of Technology Kharagpur. ",
      ],
      certificateUrl: seImage, 
    },

    {
      title: "CPA: Programming Essentials in C++ ",
      icon: cisco,
      points: [
        "Acknowledged for successfully completing the CPA: Programming Essentials in C++ course.",
        "Demonstrated the ability to accomplish coding tasks related to the basics of programming in C++ and understand fundamental notions and techniques used in objectoriented programming. ",
        "This achievement prepares the candidate to attempt the CPA – C++ Certified Associate Programmer Certification from the C++ Institute.",
      ],
      certificateUrl: ciscoImg, 
    },

    {
      title: "Data Analytics with Python",
      icon: nptel,
      points: [
        "Awarded by NPTEL for successfully completing the Data Analytics with Python course with a consolidated score of 55%.",
        "The course, held from January to April 2024, involved rigorous online assignments (scoring 21.69/25) and a proctored exam (scoring 32.81/75).",
        "  This certification, recognized by the Indian Institute of Technology Roorkee, demonstrates proficiency in data analytics using Python, encompassing data manipulation, analysis, and visualization techniques",
      ],
      certificateUrl: dataImg, 
    },
    
  ];
  

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Authify-Fake Product Identification  ",
      description:
        "Authify is a blockchain-based solution that authenticates products and prevents counterfeits by assigning unique digital identifiers. It ensures supply chain transparency and security, allowing consumers to verify product authenticity through QR codes. Authify collaborates with manufacturers and retailers to enhance trust and protect against fake goods.",
      tags: [
        {
          name: "Blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "Mern Stack",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mitdesai4703/Authify",
    },
    {
      name: "Smart First Aid",
      description:
        "Smart First Aid is an innovative platform designed to address your health needs through advanced technology and medical expertise. Our website offers personalized guidance for various situations, including real-time symptom analysis and interactive tutorials. By integrating with smart devices, Smart First Aid ensures timely alerts and continuous monitoring of vital signs, providing you with the information and support you need to stay safe and healthy.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/mitdesai4703/Smartfirst-aid",
    },
    {
      name: "Study-Notion",
      description:
        "StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. The platform offers a variety of courses across different subjects, with interactive lessons, quizzes, and assignments. Additionally, it serves as a comprehensive hub for instructors to showcase their expertise, create and manage their courses, and connect with learners globally. StudyNotion is lifelong learning.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: study,
      source_code_link: "https://github.com/mitdesai4703/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };