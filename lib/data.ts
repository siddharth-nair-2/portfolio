import arenaImg from "@/public/arena.png";
import aurograderImg from "@/public/autograder.png";
import footyshopImg from "@/public/footyshop.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
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
    title: "Freelancer",
    company: "UserTesting",
    location: "Remote, Canada",
    description:
      "Gained insights to enhance digital UX through 200+ usability tests, capturing user interactions and delivering feedback on usability.",
    icon: React.createElement(GrTest),
    date: "2020-2023",
  },
  {
    title: "Web Developer Intern",
    company: "FlowUp",
    location: "Ahmedabad, India",
    description:
      "I worked as a web developer for 4 months. Optimized service delivery by migrating legacy code to React/Node.js, boosting agent satisfaction 43%, and applying advanced matching to reduce customer wait times.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Customer Service",
    company: "Dairy Queen",
    location: "Sault Ste. Marie, ON",
    description:
      "Quick thinking and customer service skills honed in fast-paced retail. Expertly calculated accurate pricing using various tools. Collaborated cross-functionally to optimize team efficiency. Provided friendly communication resolving complaints. Adapted focus in dynamic setting.",
    icon: React.createElement(MdFastfood),
    date: "2021",
  },
  {
    title: "Graphic Designer",
    company: "National Youth Summit",
    location: "Ahmedabad, India",
    description:
      "Managed graphics team of 4 for National Youth Summit event. Designed over 700 high-quality graphics under tight deadlines. Continuously refined designs based on organizer feedback. Graphics achieved 39% increase in social media engagement.",
    icon: React.createElement(MdDesignServices),
    date: "2017",
  },
] as const;

export const projectsData = [
  {
    title: "AutoGrader",
    description:
      "AutoGrader streamlines grading programming assignments for instructors and provides students an intuitive in-browser IDE.",
    tags: ["React", "Spring Boot", "Node.js", "MongoDB", "Google Cloud"],
    imageUrl: aurograderImg,
  },
  {
    title: "Arena",
    description:
      "Built real-time chat app with React, Express, socket.io, and responsive design for seamless messaging across browsers.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Axios", "Heroku"],
    imageUrl: arenaImg,
  },
  {
    title: "FootyShop",
    description:
      "E-commerce website with React, Material-UI, Stripe, and Redux enabling seamless user experience, secure payments, intuitive navigation.",
    tags: ["React", "Redux", "Material-UI", "Stripe", "Axios", "Heroku"],
    imageUrl: footyshopImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Framer Motion",
  "AWS",
] as const;
