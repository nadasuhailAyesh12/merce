import React, { useEffect, useState } from "react";
import Loader from "../../components/Common/loader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../actions/productActions";
import { Carousel } from "react-bootstrap";
import StarRating from "../../components/product/starRating";
import { addToCart } from "../../actions/cartActions";
import { toast } from "react-toastify";
import SubmitReviewModal from "../../components/review/submitReviewModal";
import ReviewsList from "../../components/review/reviewsList";

const ProductDetails = () => {
  const [showSubmitReviewModal, setShowSubimtReviewModal] = useState(false);
  const { cartItems, subTotal } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        console.log(id);
        await dispatch(getProductDetails(id));
      } catch (error) {
        toast.error(error);
      }
    })();
  }, []);

  const handleAddToCart = () => {
    try {
      dispatch(addToCart(product, cartItems, subTotal));
      toast.success("add to cart successfuly");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row d-flex justify-content-around ">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              <Carousel pause="hover">
                {product.images &&
                  product.images.map((image) => (
                    <Carousel.Item key={image.public_id}>
                      <img className="d-block w-100 mb-100" src={image.url} />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h2>{product.name}</h2>
              <p className="text-muted">Product # {product._id}</p>

              <hr />
              <div className="d-flex">
                <StarRating rating={product.rating} />
                <span className="">({product.numOfReviews} Reviews)</span>
              </div>
              <hr />
              <div className="d-flex align-items-center">
                <b className="fs-2 me-3 ">${product.price}</b>

                <button
                  type="button"
                  id="cart_btn"
                  className="btn btn-danger  fs-5  px-4 py-2 d-inline ml-4"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              <hr />

              <h2 className="mt-2">Description:</h2>
              <p className="fs-5">{product.description}</p>
              <hr />
              <p className=" fs-5 mb-1">
                Sold by: <strong>{product.seller}</strong>
              </p>
              <button
                type="button"
                className="btn btn-danger mt-4 fs-5"
                data-toggle="modal"
                data-target="#ratingModal"
                onClick={() => setShowSubimtReviewModal(true)}
              >
                {user ? " Submit Your Review" : "login to submit your review"}
              </button>
              <SubmitReviewModal
                show={showSubmitReviewModal}
                onClose={() => setShowSubimtReviewModal(false)}
              />
            </div>
          </div>
          <hr />

          <ReviewsList reviews={product.reviews} />
        </>
      )}
    </>
  );
};

export default ProductDetails;
