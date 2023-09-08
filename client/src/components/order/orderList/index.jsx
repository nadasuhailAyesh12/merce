import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginUserOrders } from "../../../actions/orderActions";
import { MDBDataTable as OrdersTable } from "mdbreact";
import Loader from "../../Common/loader";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const OrdersList = () => {
  const { orders, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getLoginUserOrders());
    })();
  }, [dispatch]);

  const displayOrders = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Num of Items",
          field: "numOfItems",
          sort: "asc",
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };
    orders.forEach((order) => {
      data["rows"].push({
        id: order._id,
        numOfItems: order.orderItems.length,
        amount: order.totalPrice,
        status:
          order.orderStatus === "Delivered" ? (
            <p className="text-success">{order.orderStatus}</p>
          ) : (
            <p className="text-danger">{order.orderStatus}</p>
          ),
        actions: (
          <Link to={`/order/${order._id}`} className="btn btn-primary">
            <AiFillEye />
          </Link>
        ),
      });
    });
    return data;
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="my-4">My Orders</h1>
      <OrdersTable
        className="px-3"
        data={displayOrders()}
        bordered
        striped
        hover
      ></OrdersTable>
    </>
  );
};

export default OrdersList;
