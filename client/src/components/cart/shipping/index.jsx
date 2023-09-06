import React from "react";
import { countries } from "countries-list";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingInfo } from "../../../actions/cartActions";
import CheckoutSteps from "../checkoutSteps";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { address, phoneNumber, postalCode, city, country } = useSelector(
    (state) => state.cart.shippingInfo
  );
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address,
      phoneNumber,
      postalCode,
      city,
      country,
    },
  });
  const countriesList = Object.values(countries);

  const validatePhoneNumber = (value) => {
    if (!isValidPhoneNumber(value)) {
      return "Invalid phoneNumber format";
    }
    setValue("phoneNumber", phoneNumber);
    return true;
  };

  const handleChange = (e) => {
    clearErrors(e.target.name);
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(updateShippingInfo(data));
    navigate("/confirm");
  });

  return (
    <>
      <CheckoutSteps shipping />
      <div className="d-flex justify-content-center align-items-center">
        <form
          className="border shadow p-3 rounded mt-3px"
          method="post"
          style={{ width: 450 }}
          onSubmit={onSubmit}
        >
          <h1 className="text-center p-3" style={{ color: "#fc4c4e" }}>
            SHIPPING
          </h1>
          <div className="mb-3">
            <label htmlFor="address" className="form-label fs-5">
              Address
            </label>
            <input
              type="text"
              {...register("address", {
                required: "Address is required",
              })}
              className={
                errors.city ? "form-control  is-invalid" : "form-control"
              }
              name="address"
              id="address"
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label fs-5">
              City
            </label>
            <input
              type="text"
              name="city"
              className={
                errors.city ? "form-control  is-invalid" : "form-control"
              }
              id="city"
              {...register("city", {
                required: "City is required",
              })}
              onChange={handleChange}
            />
            {errors.city && (
              <p className="text-danger">{errors.city.message}</p>
            )}
          </div>
          <div className="mb-1">
            <label className="form-label fs-5">Select country:</label>
          </div>
          <select
            onChange={handleChange}
            className="form-select mb-3"
            name="country"
            aria-label="Default select example"
          >
            {countriesList.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
          </select>
          <div className="mb-4">
            <label htmlFor="postalCode" className="form-label fs-5">
              Postal Code
            </label>
            <input
              type="text"
              {...register("postalCode", {
                required: "Postal code is required",
                pattern: {
                  value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                  message: "Invalid postal code format",
                },
              })}
              name="postalCode"
              className={
                errors.postalCode ? "form-control  is-invalid" : "form-control"
              }
              id="postalCode "
              onChange={handleChange}
            />
            {errors.postalCode && (
              <p className="text-danger">{errors.postalCode.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="form-label fs-5">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phoneNumber", {
                required: "phoneNumber is required ",
                validate: validatePhoneNumber,
              })}
              name="phoneNumber"
              className={
                errors.phoneNumber ? "form-control  is-invalid" : "form-control"
              }
              id="phoneNumber"
            />
            {errors.phoneNumber && (
              <p className="text-danger">{errors.phoneNumber.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
          >
            continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
