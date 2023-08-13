import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import {
  setCurrentPage,
  setFilterOption,
  updateFilteredProducts,
} from "../../../actions/productActions";

const Filter = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.products.selectedFilter);

  const handleOptionChange = (event) => {
    dispatch(setFilterOption(event.target.value));
    dispatch(setCurrentPage(1));
    dispatch(updateFilteredProducts());
  };

  return (
    <>
      <div className="border-bottom pb-2 ml-2">
        <h4 className="burgundy">Filters</h4>
      </div>
      <div className="py-1 border-bottom ml-3">
        <input
          type="radio"
          value="all"
          id="all"
          name="options"
          className="m-2"
          checked={selectedFilter == "all"}
          onClick={() => {
            dispatch(setFilterOption("all"));
            dispatch(updateFilteredProducts());
          }}
          onChange={handleOptionChange}
        />
        <span className="font-weight-bold products">All products</span>
        <div id="rose">
          <span className="fa fa-minus" />
        </div>
      </div>

      <div className="py-2 border-bottom ml-3">
        <h6 className="font-weight-bold">Categories</h6>
        <div id="rose">
          <span className="fa fa-minus" />
        </div>

        <div className="form-group">
          <input
            type="radio"
            value="dresses"
            id="dresses"
            name="options"
            checked={selectedFilter == "dresses"}
            onChange={handleOptionChange}
          />
          <label htmlFor="dresses">Dresses</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="shirts"
            name="options"
            value="shirts"
            checked={selectedFilter == "shirts"}
            onChange={handleOptionChange}
          />
          <label htmlFor="shirts">Shirts</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="pants"
            name="options"
            value="pants"
            checked={selectedFilter == "pants"}
            onChange={handleOptionChange}
          />
          <label htmlFor="pants">Pants</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="skirts"
            name="options"
            value="skirts"
            checked={selectedFilter == "skirts"}
            onChange={handleOptionChange}
          />
          <label htmlFor="skirts">Skirts</label>
        </div>
      </div>

      <div className="py-2 border-bottom ml-3">
        <h6 className="font-weight-bold">clothes accessories</h6>
        <div id="rose">
          <span className="fa fa-minus" />
        </div>

        <div className="form-group">
          <input
            type="radio"
            value="watches"
            id="watches"
            name="options"
            checked={selectedFilter == "watches"}
            onChange={handleOptionChange}
          />
          <label htmlFor="watches">Watches</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="barcelets"
            name="options"
            value="barcelets"
            checked={selectedFilter == "barcelets"}
            onChange={handleOptionChange}
          />
          <label htmlFor="barcelets">Barcelets</label>
        </div>

        <div className="form-group">
          <input
            type="radio"
            id="necklaces"
            name="options"
            value="necklaces"
            checked={selectedFilter == "necklaces"}
            onChange={handleOptionChange}
          />
          <label htmlFor="necklaces">Necklaces</label>
        </div>

        <div className="form-group">
          <input
            type="radio"
            id="hats"
            name="options"
            value="hats"
            checked={selectedFilter == "hats"}
            onChange={handleOptionChange}
          />
          <label htmlFor="hats">Hats</label>
        </div>

        <div className="form-group">
          <input
            type="radio"
            id="rings"
            name="options"
            value="rings"
            checked={selectedFilter == "rings"}
            onChange={handleOptionChange}
          />
          <label htmlFor="rings">Rings</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="bags"
            name="options"
            value="bags"
            checked={selectedFilter == "bags"}
            onChange={handleOptionChange}
          />
          <label htmlFor="bags">Bags</label>
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="belts"
            name="options"
            value="belts"
            checked={selectedFilter == "belts"}
            onChange={handleOptionChange}
          />
          <label htmlFor="belts">Belts</label>
        </div>
      </div>
    </>
  );
};
export default Filter;
