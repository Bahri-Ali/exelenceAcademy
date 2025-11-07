'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence ,Variants} from 'framer-motion';
import Cource from './cource';
import Pagination from './pagination';

import { useTranslation } from 'react-i18next';

export default function Cources() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coursesPerPage, setCoursesPerPage] = useState<number>(6);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const totalCourses: number = 16;
  const totalPages: number = Math.ceil(totalCourses / coursesPerPage);

  const courses: number[] = Array.from({ length: totalCourses }, (_, i) => i + 1);
  const startIndex: number = (currentPage - 1) * coursesPerPage;
  const currentCourses: number[] = courses.slice(startIndex, startIndex + coursesPerPage);
  const {t}=useTranslation()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCoursesPerPage(3);
        setIsMobile(true);
      } else {
        setCoursesPerPage(6);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  const animationVariants:Variants  = {
    hidden: { opacity: 0, y : 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-[90%] mx-auto min-h-screen py-12 px-2 sm:px-6 lg:px-12">
      <h1 className="text-(--primary) font-cairo font-bold text-[28px] sm:text-[36px] leading-[62px] tracking-[-0.06em] text-center mb-12">
        {t('Suggested-courses')} 
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            place-items-center
            w-full
          "
        >
          {currentCourses.map((id: number) => (
            <motion.div key={id} variants={animationVariants} className="w-full flex justify-center">
              <Cource />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          siblingCount={1}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}