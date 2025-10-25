import Link from 'next/link';
import Image from 'next/image';
import { Code } from 'lucide-react';
import React from 'react';

/**
 * Reusable course card component.
 * @param title - The title of the course.
 * @param description - A short description of the course.
 * @param logo - URL for the course ecosystem's logo.
 * @param techStack - An object containing the primary technology name and an optional icon.
 * @param link - The URL the card should link to.
 */
interface CourseCardProps {
  title: string;
  description: string;
  logo: string;
  techStack: {
    name: string;
    icon?: React.ReactElement;
  };
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, logo, techStack, link }) => {
  return (
    <Link href={link}>
      <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground transition-colors duration-300 hover:bg-neutral-100">
        <div className="relative h-12 w-12 p-2">
          <Image
            src={logo}
            alt={`${title} logo`}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="mt-4 line-clamp-1 text-lg font-bold tracking-tight">
          {title}
        </h3>
        <p className="mt-2 hidden text-sm text-muted-foreground sm:block sm:line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-neutral-600">
          {techStack.icon ? (
            React.cloneElement(techStack.icon, { className: 'size-4 shrink-0' })
          ) : (
            <Code className="size-4 shrink-0" />
          )}
          <span className="text-sm">{techStack.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;