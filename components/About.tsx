"use client";

import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading heading="About Me" />
      <p className="mb-3">
        Hello! I'm Siddharth Nair, a{" "}
        <span className="font-semibold">
          Software Engineer at Interax Group
        </span>{" "}
        with expertise in building enterprise-scale applications. Currently, I'm working on
        <span className="font-semibold"> multi-tenant platforms</span> for regulated industries,
        specializing in{" "}
        <span className="font-semibold">.NET, React, and cloud-native architectures</span>.
      </p>
      <p className="mb-3">
        My recent work includes modernizing legacy systems managing{" "}
        <span className="font-semibold">100,000+ documents</span>,
        building{" "}
        <span className="font-semibold">AI-powered RAG pipelines</span>,
        and developing real-time document processing services. I've successfully
        implemented enterprise features like{" "}
        <span className="font-semibold">SAML 2.0 SSO</span> and
        domain-based authorization frameworks, reducing support tickets by 30%.
      </p>
      <p>
        With a{" "}
        <span className="font-semibold">Bachelor's in Computer Science (Honours, GPA: 3.9/4)</span>{" "}
        from Algoma University, I'm passionate about{" "}
        <span className="font-semibold">
          building scalable, secure solutions
        </span>{" "}
        that solve real-world problems in{" "}
        <span className="underline">healthcare, enterprise, and AI domains</span>.
      </p>
    </motion.section>
  );
}
