import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";

import "./style.css";
import {
  setSearchQuery,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Search = () => {
  const serachInput = useSelector((state) => state.products.searchQuery);
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  //clear search when clicking outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        dispatch(setSearchQuery(""));
        dispatch(updateFilteredProducts());
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

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
        value={serachInput}
        onChange={(e) => {
          dispatch(setSearchQuery(e.target.value));
          dispatch(updateFilteredProducts());
        }}
      />
      <span
        className="fa fa-search text-muted"
        onClick={() => {
          dispatch(updateFilteredProducts());
        }}
      />
    </li>
  );
};

export default Search;
