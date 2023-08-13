import React from "react";
import { useSelector } from "react-redux";

import productImages from "../../../constants/productImages";
import ProductItem from "../productItem";

const ProductList = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    <>
      <div className="row">
        {products.length ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <img
            className="notFound"
            src={productImages.NoProducts}
            alt="no products found"
          />
        )}
      </div>
    </>
  );
};

export default ProductList;
