import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef, } from "react";

import "./style.css";
import {
  setCurrentPage,
  setSearchQuery,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Search = () => {
  const { searchQuery, selectedFilter, selectedSortingOption, currentPage } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  //clear search when clicking outside
  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     if (
  //       searchInputRef.current &&
  //       !searchInputRef.current.contains(event.target)
  //     ) {
  //       dispatch(setSearchQuery(""));
  //       dispatch(
  //         updateFilteredProducts(
  //           searchQuery,
  //           selectedFilter,
  //           selectedSortingOption,
  //           currentPage
  //         )
  //       );
  //     }
  //   };

  //   document.addEventListener("click", handleDocumentClick);

  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [searchQuery, selectedFilter, selectedSortingOption, currentPage]);

  return (
    <li
      ref={searchInputRef}
      className="nav-item rounded bg-light search-nav-item"
    >
      <input
        type="text"
        id="search"
        className="bg-light"
        placeholder="Search product"
        value={searchQuery}
        onChange={(e) => {
          dispatch(setCurrentPage(1))
          dispatch(setSearchQuery(e.target.value));
          dispatch(
            updateFilteredProducts(
              e.target.value,
              selectedFilter,
              selectedSortingOption,
              currentPage
            )
          );
        }}
      />
      <span className="fa fa-search text-muted" />
    </li>
  );
};

export default Search;
