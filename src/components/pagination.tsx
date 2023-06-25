import React from "react";

export interface PaginationProps {
  cardsPerPage: number;
  totalCards: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export const Pagination = ({
  cardsPerPage,
  totalCards,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const previousPage = () => {
    currentPage--;
    setCurrentPage(currentPage);
  };

  const nextPage = () => {
    currentPage++;
    setCurrentPage(currentPage);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(totalCards / cardsPerPage);

  return (
    <div className="w-10/12 max-w-[1124px] mx-auto flex items-center gap-3 justify-end py-8">
      <button
        onClick={previousPage}
        disabled={isFirstPage}
        className={`px-2 shadow-sm rounded-md font-inter py-2 font-medium w-[100px] text-gray-700 text-sm border border-gray-300 ${
          isFirstPage
            ? "bg-gray-400 text-gray-400/100"
            : "bg-white hover:bg-red-800 hover:border-white hover:text-white"
        }`}
      >
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={isLastPage}
        className={`px-2 shadow-sm rounded-md font-inter py-2 font-medium w-[100px] text-gray-700 text-sm border border-gray-300 ${
          isLastPage
            ? "bg-gray-400 text-gray-400/100"
            : "bg-white hover:bg-red-800 hover:border-white hover:text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};
