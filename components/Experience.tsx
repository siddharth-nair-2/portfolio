"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { TimelineItem } from "./Timeline";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  
  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading heading="My experience" />
      <div className="max-w-3xl mx-auto mt-12">
        {experiencesData.map((experience, index) => (
          <TimelineItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            description={experience.description}
            icon={experience.icon}
            isLast={index === experiencesData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
