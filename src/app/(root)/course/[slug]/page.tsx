import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronLeft, Users, Clock, BarChart3 } from 'lucide-react';
import { courses } from '@/lib/data/courses';
import CourseSyllabus from '@/components/sections/course-syllabus';

async function getCourseBySlug(slug: string) {
  return courses.find(course => course.slug === slug);
}

// ✅ Fix here
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.title} | Learn & Earn`,
    description: course.description,
  };
}

// ✅ Fix type of params too
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="container max-sm:px-6 py-6 sm:py-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      {/* Course Header */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={course.logo}
                  alt={course.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">{course.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="h-4 w-4" />
                    <span>{course.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{course.studentCount.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">{course.description}</p>
            
            <button className="inline-flex items-center justify-center px-6 py-3 text-base font-bold bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90 active:scale-95">
              Start Learning
            </button>
          </div>
        </div>
      </div>

      {/* Course Syllabus */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Course Syllabus</h2>
        <CourseSyllabus phases={course.phases} courseSlug={course.slug} />
      </div>
    </main>
  );
}
