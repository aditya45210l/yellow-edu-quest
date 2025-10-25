"use client";

import * as React from "react";
import { ChevronDown, Clock, Lock } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming this utility exists

export interface Chapter {
  chapterNumber: number;
  title: string;
  duration: string;
  isLocked: boolean;
}

export interface PhaseAccordionProps {
  phaseNumber: number;
  title: string;
  chapters: Chapter[];
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

const PhaseAccordion: React.FC<PhaseAccordionProps> = ({
  phaseNumber,
  title,
  chapters,
  isExpanded,
  onToggle,
  className,
}) => {
  return (
    <div className={cn("border border-border rounded-lg bg-card overflow-hidden", className)}>
      <h3 id={`phase-${phaseNumber}-heading`} className="text-lg font-semibold sr-only">
        {title}
      </h3>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`phase-${phaseNumber}-content`}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
            {phaseNumber}
          </div>
          <div className="text-left">
            <p className="font-bold text-base md:text-lg text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">{chapters.length} chapters</p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "size-5 text-muted-foreground transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={`phase-${phaseNumber}-content`}
        role="region"
        aria-labelledby={`phase-${phaseNumber}-heading`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        )}
      >
        <div className="px-6 pb-6 pt-4 border-t border-border">
          <ul className="space-y-1">
            {chapters.map((chapter) => (
              <li
                key={chapter.chapterNumber}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-muted-foreground w-6 text-center">
                    {String(chapter.chapterNumber).padStart(2, "0")}
                  </span>
                  <p className="text-sm md:text-base text-foreground">{chapter.title}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="hidden sm:flex items-center gap-1.5">
                    <Clock className="size-4" />
                    <span>{chapter.duration}</span>
                  </div>
                  {chapter.isLocked && <Lock className="size-4" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhaseAccordion;