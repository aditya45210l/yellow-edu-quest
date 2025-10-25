"use client";

import type { Metadata } from 'next';
import { useState } from 'react';
import SidebarNavigation from '@/components/sections/sidebar-navigation';
import TopHeader from '@/components/sections/top-header';
import PageHero from '@/components/sections/page-hero';
import CourseFilters from '@/components/sections/course-filters';
import CourseGrid from '@/components/sections/course-grid';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SidebarNavigation isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="relative w-full flex-1 overflow-y-auto scroll-smooth pt-6 pb-8 sm:pt-8">
          <PageHero />
          
          <div className="container max-sm:px-6">
            <CourseFilters />
            <CourseGrid />
          </div>
        </main>
      </div>
    </>
  );
}