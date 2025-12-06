import { useState } from "react";

export const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex) || [];
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
  };

  return {
    currentData: currentData(), 
    pagination: {
      currentPage,
      totalPages,
      onNext: goToNext,
      onPrev: goToPrev,
      onGoTo: goToPage
    }
  };
};