'use client';
import { usePathname } from 'next/navigation';
import { CourseHeader } from './components/cource-sections/course-header';
import { WhatYouLearn } from './components/cource-sections/what-you-learn';
import { Curriculum } from './components/cource-sections/curriculum';
import { Requirements } from './components/cource-sections/requirements';
import { Description } from './components/cource-sections/description';
import { InstructorCard } from './components/cource-sections/instructor-card';
import { StudentReviews } from './components/cource-sections/student-reviews';
import { SidebarCard } from './components/cource-sections/sidebar-card';
import { coursesData } from './../lib/cources-data';
import type { Course } from "./../lib/types"
export default function CourseDetailPage() {
  const courceSelected: string = usePathname();
  const id = courceSelected.split('/').pop();
  const courceFind = coursesData.find((c) => c.id === id);


  return (
    <div className="min-h-screen">
      <CourseHeader course={courceFind} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <WhatYouLearn />
            <Description />
            <Curriculum />
            <Requirements />
            <InstructorCard />
            <StudentReviews />
          </div>
          <SidebarCard course={courceFind} />
        </div>
      </div>
    </div>
  );
}
