'use client';
import { useState, useMemo } from 'react';
import { SearchBar } from './components/search-bar';
import { FiltersSidebar } from './components/filter-sidebar';
import { CourseCard } from './components/cource-card';
import { Pagination } from '../cources/components/pagination';
import { coursesData } from './lib/cources-data';
import type { FilterState } from './lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const COURSES_PER_PAGE = 6;

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    category: 'الكل',
    priceRange: 'all',
    certificateType: 'all',
    duration: 'all',
    level: 'all',
  });
  const { t } = useTranslation();

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = filters.category === 'الكل' || course.category === filters.category;

      const matchesLevel = filters.level === 'all' || course.level === filters.level;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, filters]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
              {t('Suggested-courses')}
            </h2>
            <p className="text-center text-(--tages)">{t('courcesDesc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <FiltersSidebar filters={filters} onFilterChange={handleFilterChange} />
          </motion.div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {paginatedCourses.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {paginatedCourses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    )}
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <p className="text-xl text-muted-foreground">لم يتم العثور على دورات مطابقة للبحث</p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
