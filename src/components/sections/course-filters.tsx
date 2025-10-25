"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

const CourseFilters = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-4 sm:flex">
        <button
          className="group inline-flex h-9 items-center justify-between gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm font-semibold text-foreground outline-none transition-colors duration-200 hover:bg-neutral-200 aria-expanded:bg-neutral-800 aria-expanded:text-white sm:max-w-[15.625rem]"
          aria-expanded={isOpen}
          data-state={isOpen ? "open" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="truncate whitespace-nowrap">Language</span>
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-aria-expanded:rotate-180" />
        </button>
      </div>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="mt-4 mb-6 h-px w-full shrink-0 bg-neutral-200 sm:mb-8"
      />
    </div>
  );
};

export default CourseFilters;