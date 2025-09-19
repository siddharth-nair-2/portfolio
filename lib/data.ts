import arenaImg from "@/public/arena.png";
import aurograderImg from "@/public/autograder.png";
import monolithImg from "@/public/monolith.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdDesignServices, MdFastfood } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Interax Group",
    location: "Toronto, Canada",
    description:
      "Built multi-tenant inventory platform for healthcare enterprises. Modernized legacy system to Blazor/.NET managing 100K+ documents. Developed licensing engine for 500+ users. Created real-time DOCX/PDF conversion service. Implemented SAML 2.0 SSO reducing support tickets by 30%.",
    icon: React.createElement(SiDotnet),
    date: "Sept 2023 - Present",
  },
  {
    title: "Web Developer Intern",
    company: "FlowUp",
    location: "Ahmedabad, India",
    description:
      "Migrated legacy PHP/JQuery to React/Node.js. Built full-stack crypto tracking app with 100+ currencies. Redesigned agent dashboard with JsSIP and WebRTC. Improved service delivery reducing wait times by 14%.",
    icon: React.createElement(FaReact),
    date: "May - Aug 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Monolith AI Assistant",
    description:
      "Secure RAG pipeline with ACL-aware retrieval, hybrid search, and real-time streaming chat. Multi-tenant backend with FastAPI handling 40+ endpoints.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Celery", "Haystack", "Qdrant"],
    imageUrl: monolithImg,
    githubUrl: "https://github.com/siddharth-nair-2/monolith-backend",
  },
  {
    title: "Arena",
    description:
      "Built real-time chat app with React, Express, socket.io, and responsive design for seamless messaging across browsers.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Axios", "Heroku"],
    imageUrl: arenaImg,
    githubUrl: "https://github.com/siddharth-nair-2/Arena-chat-app",
  },
  {
    title: "AutoGrader",
    description:
      "AutoGrader streamlines grading programming assignments for instructors and provides students an intuitive in-browser IDE.",
    tags: ["Java", "React", "Node.js", "MongoDB", "Spring Boot", "Google Cloud"],
    imageUrl: aurograderImg,
    githubUrl: "https://github.com/siddharth-nair-2/AutoGrader-FinalBuild",
  },
] as const;

export const skillsData = [
  "C#",
  "TypeScript",
  "Java",
  "JavaScript",
  "Python",
  "SQL",
  ".NET Core",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Spring Boot",
  "Blazor",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Qdrant",
  "Docker",
  "Celery",
  "Haystack",
  "WebRTC",
  "SAML 2.0",
  "Git",
] as const;
