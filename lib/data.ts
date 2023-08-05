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
      "AutoGrader is a tool designed to simplify the process of grading programming assignments for instructors, while providing students with a user-friendly in-browser Integrated Development Environment.",
    tags: [
      "Java",
      "React",
      "Node.js",
      "MongoDB",
      "Spring Boot",
      "Google Cloud",
    ],
    imageUrl: aurograderImg,
  },
  {
    title: "Arena",
    description:
      "Developed a live chat app using React and Express.js, featuring a secure login/signup system, real-time messaging with socket.io, and responsive design for seamless use across browsers.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Axios", "Heroku"],
    imageUrl: arenaImg,
  },
  {
    title: "FootyShop",
    description:
      "A dynamic e-commerce website created with React, Material-UI, Stripe, and Redux for a seamless user experience and secure payment processing, along with with intuitive navigation and responsive design.",
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
