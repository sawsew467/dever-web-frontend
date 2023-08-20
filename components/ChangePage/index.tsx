import React from "react";
import arrowLeft from "@images/pages/blogs/arrowLeft.svg";
import arrowRight from "@images/pages/blogs/arrowRightNonColor.svg";
import Image from "next/image";

export interface ChangePageProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function ChangePage({ currentPage, totalPages, onPageChange }: ChangePageProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`sm:w-[30px] sm:h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]  border border-solid border-1 rounded-[2px] flex justify-center items-center ${
            i === currentPage ? "bg-primary text-white" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex sm:gap-[10px] lg:gap-[12px] xl:gap-[16px] justify-center items-center sm:text-[12px] lg:text-[16px]">
      <div
        className={`sm:w-[30px] sm:h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] flex justify-center border border-solid border-1 rounded-[2px] ${
          currentPage === 1 ? "bg-[#D9D9D9] cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <Image src={arrowLeft} alt="arrow" />
      </div>
      {generatePageNumbers()}
      <div
        className={`sm:w-[30px] sm:h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]  flex justify-center border border-solid border-1 rounded-[2px] ${
          currentPage === totalPages ? "bg-[#D9D9D9] cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <Image src={arrowRight} alt="arrow" />
      </div>
    </div>
  );
}

export default ChangePage;
