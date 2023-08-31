import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setCurrentPage,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Pagination = () => {
  const {
    filteredProducts,
    searchQuery,
    selectedFilter,
    selectedSortingOption,
    currentPage,
  } = useSelector((state) => state.products);
  console.log(filteredProducts);
  const dispatch = useDispatch();

  const totalPages =
    !selectedFilter && !searchQuery
      ? 6
      : Math.ceil(filteredProducts.length / 7);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePreviousPage = (e, pageNumber) => {
    e.preventDefault();
    dispatch(setCurrentPage(Math.max(currentPage - 1), 1));
    dispatch(
      updateFilteredProducts(
        searchQuery,
        selectedFilter,
        selectedSortingOption,
        Number(pageNumber) - 1
      )
    );
  };

  const handleNextPage = (e, pageNumber) => {
    e.preventDefault();
    dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)));
    dispatch(
      updateFilteredProducts(
        searchQuery,
        selectedFilter,
        selectedSortingOption,
        Number(pageNumber) + 1
      )
    );
  };

  const handleClickedPage = (e, pageNumber) => {
    e.preventDefault();
    dispatch(setCurrentPage(pageNumber));
    dispatch(
      updateFilteredProducts(
        searchQuery,
        selectedFilter,
        selectedSortingOption,
        Number(pageNumber)
      )
    );
  };

  return (
    <nav aria-label="...">
      <ul className="pagination d-flex justify-content-center m-11">
        <li className="page-item">
          <a
            className="page-link "
            onClick={(e) => handlePreviousPage(e, currentPage)}
          >
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
          <a
            className="page-link"
            onClick={(e) => handleNextPage(e, currentPage)}
            href="#"
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
