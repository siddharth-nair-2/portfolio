import React from "react";

export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {heading}
    </h2>
  );
}
