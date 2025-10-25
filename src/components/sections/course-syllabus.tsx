"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Clock, Lock, CheckCircle2 } from 'lucide-react';
import { Phase } from '@/lib/data/courses';

interface CourseSyllabusProps {
  phases: Phase[];
  courseSlug: string;
}

const CourseSyllabus = ({ phases, courseSlug }: CourseSyllabusProps) => {
  const [expandedPhases, setExpandedPhases] = useState<string[]>([phases[0]?.id]);

  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev =>
      prev.includes(phaseId)
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  return (
    <div className="space-y-4">
      {phases.map((phase) => {
        const isExpanded = expandedPhases.includes(phase.id);
        const totalUnits = phase.units.length;
        const completedUnits = phase.units.filter(u => u.isCompleted).length;
        
        return (
          <div
            key={phase.id}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            {/* Phase Header */}
            <button
              onClick={() => togglePhase(phase.id)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {phase.number}
                </div>
                <div className="text-left">
                  <p className="font-bold text-base md:text-lg text-foreground mb-1">
                    {phase.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {completedUnits}/{totalUnits} units completed
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Phase Content - Units */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-border">
                <ul className="space-y-1">
                  {phase.units.map((unit) => {
                    const unitContent = (
                      <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-accent transition-colors">
                        <div className="flex items-center gap-4 flex-1">
                          <span className="font-mono text-sm text-muted-foreground w-8 text-center flex-shrink-0">
                            {String(unit.number).padStart(2, '0')}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm md:text-base text-foreground font-medium">
                              {unit.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="hidden sm:flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{unit.duration}</span>
                          </div>
                          {unit.isCompleted && (
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          )}
                          {unit.isLocked && (
                            <Lock className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    );

                    return (
                      <li key={unit.id}>
                        {!unit.isLocked ? (
                          <Link
                            href={`/course/${courseSlug}/unit/${unit.id}`}
                            className="block"
                          >
                            {unitContent}
                          </Link>
                        ) : (
                          <div className="cursor-not-allowed opacity-60">
                            {unitContent}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseSyllabus;