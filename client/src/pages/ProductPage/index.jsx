import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import Navbar from "../../components/Common/Navbar";
import ProductList from "../../components/product/productList";
import Sort from "../../components/product/sort";
import Filter from "../../components/product/filter";
import Pagination from "../../components/product/pagination";
import Loader from "../../components/Common/loader";
import { updateFilteredProducts } from "../../actions/productActions";
import { toast } from "react-toastify";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { searchQuery, selectedFilter, selectedSortingOption, currentPage } =
    useSelector((state) => state.products);
  const loading = useSelector((state) => state.products.loading);
  const [showMobileFilter, setMobileFilter] = useState(false);

  useEffect(() => {
    try {
      dispatch(
        updateFilteredProducts(
          searchQuery,
          selectedFilter,
          selectedSortingOption,
          currentPage
        )
      );
    } catch (error) {
      toast.error(error);
    }
  }, []);

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
