const Pagination = ({ handlePreviousPage, handleNextPage }) => {
  return (
    <div className="pagination-container">
      {handlePreviousPage && (
        <button className="pagination-btn" onClick={handlePreviousPage}>
          ← Previous
        </button>
      )}
      {handleNextPage && (
        <button className="pagination-btn" onClick={handleNextPage}>
          Next →
        </button>
      )}
    </div>
  );
};

export default Pagination;
