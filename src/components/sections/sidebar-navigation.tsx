"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  LayoutGrid,
} from "lucide-react";

const navSections = [
  {
    title: 'Learn',
    items: [
      { href: '/', icon: Compass, label: 'Explore Course', active: true },
    ]
  }
];

const NavItem = ({ href, icon: Icon, label, active = false }: any) => {
  const content = (
    <div
      data-active={active}
      className="flex cursor-pointer items-center gap-1 rounded-lg border border-transparent px-3 py-1 text-sm leading-[150%] text-muted-foreground transition-all duration-300 hover:border-border hover:bg-accent data-[active=true]:bg-accent data-[active=true]:font-extrabold data-[active=true]:text-primary"
    >
      <span className="relative h-6 w-6 flex-shrink-0">
        <Icon className="h-full w-full" strokeWidth={active ? 2.25 : 1.5} />
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );

  return <Link href={href}>{content}</Link>;
};

interface SidebarNavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SidebarNavigation = ({ isOpen = true, onClose }: SidebarNavigationProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:flex w-60 flex-shrink-0 flex-col border-r border-border bg-sidebar">
        <div className="flex w-full items-center justify-end px-3 pt-8 pb-4">
          <button
            aria-label="Switch Website"
            className="rounded p-1 outline-none transition-colors duration-200 hover:bg-accent"
          >
            <LayoutGrid className="h-4 w-4 text-foreground" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-8 max-sm:pt-0">
          <li className="mb-3"></li> 

          {navSections.map((section) => (
            <React.Fragment key={section.title}>
              <li className="flex items-center gap-1 py-1">
                <span className="font-semibold text-xs leading-normal text-muted-foreground">{section.title}</span>
                <span className="inline-block h-px flex-1 bg-border"></span>
              </li>
              {section.items.map(item => (
                <li key={item.href}>
                  <NavItem {...item} />
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 sm:hidden"
            onClick={onClose}
          />
          <aside className="fixed left-0 top-0 bottom-0 w-60 flex-shrink-0 flex-col border-r border-border bg-sidebar z-50 sm:hidden">
            <div className="flex w-full items-center justify-end px-3 pt-8 pb-4">
              <button
                aria-label="Switch Website"
                className="rounded p-1 outline-none transition-colors duration-200 hover:bg-accent"
              >
                <LayoutGrid className="h-4 w-4 text-foreground" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-8">
              <li className="mb-3"></li> 

              {navSections.map((section) => (
                <React.Fragment key={section.title}>
                  <li className="flex items-center gap-1 py-1">
                    <span className="font-semibold text-xs leading-normal text-muted-foreground">{section.title}</span>
                    <span className="inline-block h-px flex-1 bg-border"></span>
                  </li>
                  {section.items.map(item => (
                    <li key={item.href} onClick={onClose}>
                      <NavItem {...item} />
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </aside>
        </>
      )}
    </>
  );
};

export default SidebarNavigation;