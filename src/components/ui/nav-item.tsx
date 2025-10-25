import Link from 'next/link';
import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  href,
  isActive = false,
  isExternal = false,
}) => {
  const content = (
    <div
      data-active={isActive}
      className="flex cursor-pointer items-center gap-1 rounded-lg border border-transparent px-3 py-1 text-neutral-600 text-sm leading-[150%] transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-100 data-[active=true]:bg-neutral-100 data-[active=true]:font-extrabold data-[active=true]:text-primary"
    >
      <span className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="flex-1 whitespace-nowrap">{label}</span>
      {isExternal && <ArrowUpRight className="h-4 w-4 shrink-0" />}
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="no-underline">
      {content}
    </Link>
  );
};

export default NavItem;