'use client';

import { useMemo } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  isMobile?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = '',
  isMobile = false,
}: PaginationProps) {
  const createRange = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const range = useMemo(() => {
    const totalNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalNumbers) return createRange(1, totalPages);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    if (!showLeftDots && showRightDots) {
      const leftRange = createRange(1, 3 + 2 * siblingCount);
      return [...leftRange, '...', totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = createRange(totalPages - (3 + 2 * siblingCount) + 1, totalPages);
      return [1, '...', ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = createRange(leftSiblingIndex, rightSiblingIndex);
      return [1, '...', ...middleRange, '...', totalPages];
    }

    return createRange(1, totalPages);
  }, [currentPage, totalPages, siblingCount]);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  // mobile version 
  if (isMobile) {
    return (
      <nav className={`flex items-center justify-center gap-3 sm:hidden ${className}`}>
        <button
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg  text-sm font-medium  bg-(--primary) text-white   shadow-sm 
                     disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          السابق
        </button>

        <div className="px-4 py-2 rounded-lg text-sm font-semibold text-(--tages) bg-gray-100 border border-gray-200">
          {currentPage} / {totalPages}
        </div>

        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer bg-(--primary) text-white border  
                      disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          التالي
        </button>
      </nav>
    );
  }

  return (
    <nav
      className={`hidden sm:flex items-center justify-center space-x-2 sm:space-x-3 ${className}`}
      aria-label="Pagination Navigation"
    >
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 sm:px-4 rounded-md text-sm sm:text-base bg-(--primary)  text-white cursor-pointer"
      >
        السابق
      </button>

      <div className="flex items-center space-x-2 sm:space-x-3">
        {range.map((item, idx) =>
          item === '...' ? (
            <span key={idx} className="px-3 text-(--tages) select-none">
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => goTo(item as number)}
              className={`px-3 py-1.5 sm:px-4 rounded-md text-sm sm:text-base border shadow-sm transition-all cursor-pointer
                ${
                  item === currentPage
                    ? 'bg-(--primary) text-white'
                    : 'bg-white text-(--tages) border-gray-300 hover:bg-gray-50'
                }`}
            >
              {item}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 sm:px-4 rounded-md text-sm sm:text-base bg-(--primary) text-white  cursor-pointer"
      >
        التالي
      </button>
    </nav>
  );
}
