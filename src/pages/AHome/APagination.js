const APagination = ({ feedbacksPerPage, totalFeedbacks, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalFeedbacks / feedbacksPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => {
                  paginate(number);
                  // Update the URL with the new page number
                  window.history.pushState({}, '', `?page=${number}`);
                }}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default APagination;
  