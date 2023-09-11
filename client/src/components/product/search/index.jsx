import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
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

  const handleSearch = (e) => {
    dispatch(setCurrentPage(1));
    dispatch(setSearchQuery(e.target.value));
    dispatch(
      updateFilteredProducts(
        e.target.value,
        selectedFilter,
        selectedSortingOption,
        currentPage
      ))
  };
 
  return (
    <div style={{width:'60%'}}>
    <Form  >
      <Form.Control
          type="search"
          placeholder="Search product"
          className="nav-item rounded bg-light search-nav-item"
          value={searchQuery}
          onChange={handleSearch}
          onBlur={() => {
            handleSearch({
              target: {
              value:""
            }})
          }
        }
          aria-label="Search product"
         
      />
      
      </Form>
      </div>
  );
};

export default Search;
