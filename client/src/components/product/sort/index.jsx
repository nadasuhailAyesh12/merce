import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import {
  setSortingOption,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Sort = () => {
  const { searchQuery, selectedFilter, selectedSortingOption, currentPage } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-row mb-2 ">
      <div className="ml-auto mr-lg-4">
        <div id="sorting" className="border rounded p-1 m-1">
          <span className="text-muted">Sort by</span>
          <select
            name="sort"
            id="sort"
            onChange={(e) => {
              dispatch(setSortingOption(e.target.value));
              dispatch(
                updateFilteredProducts(
                  searchQuery,
                  selectedFilter,
                  e.target.value,
                  currentPage
                )
              );
            }}
            value={selectedSortingOption}
          >
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
