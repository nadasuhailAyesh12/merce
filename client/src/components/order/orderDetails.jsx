import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Common/loader";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails } from "../../actions/orderActions";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.order);
  const { shippingInfo, totalPrice, orderItems, paymentInfo, orderStatus } =
    order;
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const shippingDetails =
    shippingInfo &&
    ` ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;
  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getOrderDetails(id));
      } catch (error) {
        toast.error(error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="row d-flex  shadow p-3 mb-5 bg-white rounded "
            style={{ marginLeft: 200 }}
          >
            <div className="col-12 col-lg-8 mt-5 order-details">
              <h1 className="my-3">Order # {order._id}</h1>
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="my-4">Payment</h4>
                  <p className={isPaid ? "text-success" : "text-danger"}>
                    <b>{isPaid ? "PAID" : "NOT PAID"}</b>
                  </p>

                  <h4 className="my-4">Order Status:</h4>
                  <p
                    className={
                      orderStatus && String(orderStatus).includes("Delivered")
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    <b>{orderStatus}</b>
                  </p>
                </div>
                <div>
                  <h4 className="my-4">Shipping Info</h4>
                  <p>
                    <b>Name:</b> {user && user.name}
                  </p>
                  <p>
                    <b>Phone:</b> {shippingInfo && shippingInfo.phoneNumber}
                  </p>
                  <p className="mb-4">
                    <b>Address:</b>
                    {shippingDetails}
                  </p>
                  <p>
                    <b>Total:</b> ${totalPrice}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="my-4">Order Items:</h4>

                <hr />
                <div className="cart-item my-1">
                  {orderItems &&
                    orderItems.map((item) => (
                      <div key={item.product} className="row my-5">
                        <div className="col-4 col-lg-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            height="45"
                            width="65"
                          />
                        </div>

                        <div className="col-5 col-lg-5">
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                          <p>${item.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                          <p>{item.quantity} Piece(s)</p>
                        </div>
                      </div>
                    ))}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetails;
