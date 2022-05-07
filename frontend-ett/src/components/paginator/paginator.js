import React, { useState } from "react";
import "./paginator.css";
import Pagination from "react-js-pagination";
const Paginator = ({page, setPage, itemsCountPerPage, totalItemsCount}) => {
  const handlePageChange = (page) => {
    document.getElementById('page').scrollTo(0,0);
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};
export default Paginator;
