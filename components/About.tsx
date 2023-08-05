"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <p className="mb-3">
        Hello! I'm Siddharth Nair, a{" "}
        <span className="font-semibold">
          passionate software/full-stack developer
        </span>{" "}
        with a strong focus on creating dynamic and engaging online experiences.
        My journey in computers began during my early teenage years when I first
        <span className="font-semibold"> built my own PC</span>. This early
        exploration ignited my
        <span className="font-semibold"> enthusiasm</span> for the field.
      </p>
      <p className="mb-3">
        Since then, I have had the opportunity to learn in diverse environments,
        including an{" "}
        <span className="font-semibold">
          internship, freelance work, 4 years of University, and various
          personal projects
        </span>
        . These experiences have enriched my skill set and provided me with a
        comprehensive understanding of{" "}
        <span className="font-semibold"> development processes</span> and best
        practices.
      </p>
      <p>
        I am motivated by the opportunity to combine my{" "}
        <span className="font-semibold">
          technical skills, creativity, and problem-solving abilities
        </span>{" "}
        to build{" "}
        <span className="underline">cutting-edge software solutions</span>.
      </p>
    </motion.section>
  );
}
