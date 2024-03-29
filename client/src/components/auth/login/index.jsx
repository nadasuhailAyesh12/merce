import React, { useState } from "react";
import { clearNonInputErrors, login } from "../../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ForgetPassword from "../forgetPasswordModal";
import { createOrder } from "../../../actions/orderActions";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const { nonInputErrors } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors: clearInputErrors,
    setValue,
    isSubmitting,
  } = useForm();

  const handleInputChange = (e) => {
    dispatch(clearNonInputErrors());
    clearInputErrors(e.target.name);
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const intendedDestination = sessionStorage.getItem("intendedDestination");

      const successMessage = await dispatch(login(data.email, data.password));
      const guestOrderInfo = JSON.parse(
        sessionStorage.getItem("guestOrderInfo")
      );
      // transfer claim orders to reall ones if they decide to be authUsers
      if (guestOrderInfo) {
        await dispatch(
          createOrder({
            tax: guestOrderInfo.tax,
            totalPrice: guestOrderInfo.totalPrice,
            subTotal: guestOrderInfo.subTotal,
            shippingCost: guestOrderInfo.shippingCost,
            shippingInfo: guestOrderInfo.shippingInfo,
            paymentInfo: guestOrderInfo.paymentInfo,
            orderItems: guestOrderInfo.orderItems,
          })
        );
        sessionStorage.removeItem("guestOrderInfo");
        toast.success(successMessage);
        navigate("/orders/me");
      } else {
        toast.success(successMessage);
        navigate(intendedDestination || "/me");
      }
    } catch (error) {
      toast.error(error || "An error occured");
    }
  });
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: 30 }}
      >
        <form
          className="border shadow p-3 rounded mt-10px"
          style={{ width: 450 }}
          onSubmit={onSubmit}
          noValidate
        >
          <h1 className="text-center p-2" style={{ color: "#fc4c4e" }}>
            Login
          </h1>
          <div className="form-outline mb-2.5">
            <input
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Not a valid email address",
                },
                required: "Email is required",
              })}
              className={
                errors.email
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              placeholder="Enter your email"
              name="email"
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="email"></label>
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="form-outline mb-2.5">
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be less 6 bits",
                },
                maxLength: {
                  value: 64,
                  message: "Password must be less than 64 bits",
                },
              })}
              id="password"
              className={
                errors.password
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="password"></label>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <span
            className="text-primary cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Forgot password?
          </span>
          <ForgetPassword
            showModal={showModal}
            onClose={() => setShowModal(false)}
          />
          <button
            className="btn btn-primary btn-lg btn-block btn w-100 rounded mt-3 my-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : "Login"}
          </button>
          {/* <p className="text-danger"> {nonInputErrors}</p> */}
          <hr className="my-2.5" />
          <button className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2">
            <i className="fab fa-google me-2" /> Sign in with google
          </button>

          <p className="small fw-bold mt-2 pt-1 mb-0 cursor-pointer align-self-center">
            Don't have an account?{" "}
            <Link to="/register" className="link-danger">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
