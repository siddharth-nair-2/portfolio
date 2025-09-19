"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

type TimelineItemProps = {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
};

export function TimelineItem({
  date,
  title,
  company,
  location,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) {
  const { theme } = useTheme();

  return (
    <div className="flex gap-x-3 relative">
      {/* Line */}
      {!isLast && (
        <div
          className="absolute left-[2.125rem] top-[3.25rem] h-full w-0.5 bg-gray-300 dark:bg-gray-600"
        />
      )}
      
      {/* Icon container */}
      <div className="relative z-10 size-[4.25rem] flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="size-[4.25rem] rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-700"
        >
          <span className="text-2xl">{icon}</span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grow pb-8 pt-0.5"
      >
        <div className="flex gap-x-4 items-center mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {title} | {company}
          </h3>
          <time className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
            {date}
          </time>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {location}
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}