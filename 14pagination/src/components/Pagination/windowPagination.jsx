import React from 'react';
import "./Pagination.css"

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPaginationButtons = () => {

    let buttons = [];

    let startPage, endPage;

    // Less than 3 total pages so show all
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } 
    
    // More than 3 total pages so calculate window
    else {

      // conditions should be same for first three pages
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } 

      // currentPage is second last page
      else if (currentPage + 1 == totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } 

      // currentPage stays in middle always
      else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    // Previous Button
    buttons.push(
      <button
        key="prev"
        onClick={goToPrevious}
        className={currentPage === 1 ? 'disabled' : ''}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    );

    // Dynamically generated Page Number Buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i} onClick={() => onPageChange(i)} className={i === currentPage ? 'active' : ''}
        >
        {i}
        </button>
      );
    }

    // Next Button
    buttons.push(
      <button
        key="next"
        onClick={goToNext}
        className={currentPage === totalPages ? 'disabled' : ''}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );

    return buttons;
  };

  return (
    <div className="pagination">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
