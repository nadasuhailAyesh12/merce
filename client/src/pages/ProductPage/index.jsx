import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import Navbar from "../../components/Common/Navbar";
import ProductList from "../../components/product/productList";
import Sort from "../../components/product/sort";
import Filter from "../../components/product/filter";
import Pagination from "../../components/product/pagination";
import Loader from "../../components/Common/loader";

const ProductPage = () => {
  // const error = useSelector(state => state.cart.error)
  const loading = useSelector((state) => state.products.loading);
  const [showMobileFilter, setMobileFilter] = useState(false);

  // const showErrorToast = (message) => {
  //   toast.error(message);
  //   dispatch(clearError());
  // };

  return (
    <>
      {/* ------------------------Header------------------------*/}
      <Navbar showSearch={true} />

      {/* ------------------------Filter section ------------------------*/}
      <div className="filter">
        <button
          className="btn btn-default"
          type="button"
          onClick={() => setMobileFilter(!showMobileFilter)}
        >
          Filters<span className="fa fa-filter pl-1"></span>
        </button>
      </div>
      {showMobileFilter && (
        <div id="mobile-filter">
          <Filter />
        </div>
      )}
      <div id="sidebar">
        <Filter />
      </div>

      {/* ------------------------Products section ------------------------*/}
      <div>{/* ...rest of your code */}</div>

      <section id="products">
        <Sort />
        {!loading ? <ProductList /> : <Loader />}
        <Pagination />
      </section>
    </>
  );
};

export default ProductPage;
