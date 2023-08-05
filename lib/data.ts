import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import arenaImg from "@/public/arena.png";
import aurograderImg from "@/public/autograder.png";
import footyshopImg from "@/public/footyshop.png";

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
    location: "Remote, Canada",
    description:
      "Gained insights to enhance digital UX through 175+ usability tests, capturing user interactions and delivering feedback on usability.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Web Developer Intern",
    location: "Ahmedabad, India",
    description:
      "I worked as a web developer for 4 months. Optimized service delivery by migrating legacy code to React/Node.js, boosting agent satisfaction 43%, and applying advanced matching to reduce customer wait times..",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
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
