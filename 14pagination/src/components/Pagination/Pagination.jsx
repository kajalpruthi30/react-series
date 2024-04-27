import React from 'react';
import "./Pagination.css"

// 1. No. of button show -> totalPages
// 2. active class -> current page
// 3. onClick -> onPageChange

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



  const renderPagination = () => {
    let buttons = [];

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

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
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
      {renderPagination()}
    </div>
  );
};

export default Pagination;
