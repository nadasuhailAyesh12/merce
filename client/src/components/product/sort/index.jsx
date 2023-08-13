import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import {
  setSortingOption,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Sort = () => {
  const selectedSortOption = useSelector(
    (state) => state.products.selectedSortOption
  );
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
              dispatch(updateFilteredProducts());
            }}
            value={selectedSortOption}
            onFocus={(e) => {
              dispatch(setSortingOption(e.target.value));
              dispatch(updateFilteredProducts());
            }}
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
