import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  updateFilteredProducts
} from "../../actions/productActions";

import "./style.css";
import Navbar from "../../components/Common/Navbar";
import ProductList from "../../components/product/productList";
import Sort from "../../components/product/sort";
import Filter from "../../components/product/filter";
import Pagination from "../../components/product/pagination";
import { clearError } from "../../actions/cartActions";

const ProductPage = () => {
  const error = useSelector((state) => state.cart.error);
  const dispatch = useDispatch();
  const [showMobileFilter, setMobileFilter] = useState(false)
  
  useEffect(() => {
    dispatch(updateFilteredProducts());
  }, [dispatch]);

  const showErrorToast = (message) => {
    toast.error(message);
    dispatch(clearError());
  };

  return (
    <>
      {/* ------------------------Header------------------------*/}
      <Navbar showSearch={true} />

      {/* ------------------------Filter section ------------------------*/}
      <div className="filter">
    <button className="btn btn-default" type="button" onClick={()=>setMobileFilter(!showMobileFilter)}>Filters<span className="fa fa-filter pl-1"></span></button>
</div>
      {showMobileFilter && <div id='mobile-filter'>
        <Filter />
      </div>}
      <div id='sidebar'>
        <Filter />
           </div>

      {/* ------------------------Products section ------------------------*/}
      <section id="products">
        <Sort />
        <ProductList />
        <Pagination />
      </section>
      {error && showErrorToast(error)}
    </>
  );
};

export default ProductPage;
