"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./SingleProject";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className=" scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading heading="My projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
