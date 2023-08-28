import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../Common/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../../actions/authActions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors: clearInputErrors,
    setValue,
  } = useForm();
  const { token } = useParams();

  const handleInputChange = (e) => {
    clearInputErrors(e.target.name);
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const message = await dispatch(resetPassword(data, token));
      toast.success(message);
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  });

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: 100 }}
      >
        <form
          className="border shadow p-3 rounded mt-10px"
          style={{ width: 450 }}
          onSubmit={onSubmit}
          noValidate
        >
          <h1 className="text-center p-2" style={{ color: "#fc4c4e" }}>
            Reset password
          </h1>
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
              name="password"
              id="password"
              onChange={handleInputChange}
              className={
                errors.password
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              placeholder="ADD new password"
            />
            <label className="form-label" htmlFor="password"></label>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="form-outline mb-2.5">
            <input
              type="password"
              {...register("confirmPassword", {
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
              id="confirmPassword"
              className={
                errors.confirmPassword
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="password"></label>
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
          >
            Reset password
          </button>
        </form>
      </div>
    </>
  );
};
export default ResetPassword;
