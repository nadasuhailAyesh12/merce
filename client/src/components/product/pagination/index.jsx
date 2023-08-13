import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setCurrentPage,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Pagination = () => {
  const currentPage = useSelector((state) => state.products.currentPage);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const selectedFilter = useSelector((state) => state.products.selectedFilter);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const dispatch = useDispatch();

  const totalPages =
    selectedFilter === "all" && !searchQuery
      ? 6
      : Math.ceil(filteredProducts.length / 7);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePreviousPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(Math.max(currentPage - 1), 1));
    dispatch(updateFilteredProducts());
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)));
    dispatch(updateFilteredProducts());
  };

  const handleClickedPage = (e, pageNumber) => {
    e.preventDefault();
    dispatch(setCurrentPage(pageNumber));
    dispatch(updateFilteredProducts());
  };

  return (
    <nav aria-label="...">
      <ul className="pagination d-flex justify-content-center m-11">
        <li className="page-item">
          <a className="page-link " onClick={handlePreviousPage}>
            &laquo;
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${currentPage === pageNumber && "active"}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={(e) => handleClickedPage(e, pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={handleNextPage} href="#">
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
