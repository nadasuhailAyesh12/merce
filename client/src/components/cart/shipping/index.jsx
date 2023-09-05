import React from "react";
import { countries } from "countries-list";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingInfo } from "../../../actions/cartActions";
import CheckoutSteps from "../checkoutSteps";

function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { address, phoneNumber, postalCode, city, country } = useSelector(
    (state) => state.cart.shippingInfo
  );
  const countriesList = Object.values(countries);

  const handleChange = (field, value) => {
    dispatch(updateShippingInfo({ [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm");
  };

  return (
    <>
      <CheckoutSteps shipping />

      <div className="d-flex justify-content-center align-items-center">
        <form
          className="border shadow p-3 rounded mt-3px"
          method="post"
          style={{ width: 450 }}
          onSubmit={handleSubmit}
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
              className="form-control"
              name="address"
              id="address"
              onChange={(e) => handleChange("address", e.target.value)}
              value={address}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label fs-5">
              City
            </label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label className="form-label fs-5">Select country:</label>
          </div>
          <select
            onChange={(e) => handleChange("country", e.target.value)}
            className="form-select mb-3"
            name="role"
            aria-label="Default select example"
            value={country}
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
              name="postalCode"
              className="form-control"
              id="postalCode "
              value={postalCode}
              onChange={(e) => handleChange("postalCode", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="form-label fs-5">
              Phone No
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
}

export default Shipping;
