import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable as ProductsTable } from "mdbreact";
import Loader from "../Common/loader";
import { Link } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { getAdminProducts } from "../../actions/productActions";

const ProductList = () => {
  const { adminProducts: products, loading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAdminProducts());
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  const displayProducts = () => {
    const data = {
      columns: [
        {
          label: "Product ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
        },
        {
          label: "Stock",
          field: "stock",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };
    products.forEach((product) => {
      data["rows"].push({
        id: product._id,
        name: product.name,
        stock: product.stock,
        price: product.price,
        actions: (
          <>
            <Link to={`#`} className="btn btn-primary me-2">
              <HiPencilAlt />
            </Link>
            <Link to={`#`} className="btn btn-danger">
              <FaTrashAlt />
            </Link>
          </>
        ),
      });
    });
    return data;
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="my-4">All products</h1>
      <ProductsTable
        className="px-3"
        data={displayProducts()}
        bordered
        striped
        hover
      ></ProductsTable>
    </>
  );
};

export default ProductList;
