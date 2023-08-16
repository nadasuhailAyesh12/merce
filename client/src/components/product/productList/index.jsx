import React from "react";
import { useSelector } from "react-redux";

import productImages from "../../../constants/productImages";
import ProductItem from "../productItem";

const ProductList = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const loading = useSelector((state) => state.products.loading);

  return (
    <>
      <div className="row">
        {!loading && !products.length ? (
          <img
            className="notFound"
            src={productImages.NoProducts}
            alt="no products found"
          />
        ) : (
          products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
