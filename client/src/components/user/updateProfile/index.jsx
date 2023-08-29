import React, { useState } from "react";
import { clearNonInputErrors, loadUser, signup } from "../../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Navbar from "../../Common/Navbar";
import "./style.css";
import { updateProfile } from "../../../actions/userActions"

const UpdateProfile = () => {
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

//   const [avatarPreview, setAvatarPreview] = useState(
//     "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
//   );

  const handleInputChange = (e) => {
    dispatch(clearNonInputErrors());
    clearInputErrors(e.target.name);
    setValue(e.target.name, e.target.value);
  };
//   const handleAvatar = (e) => {
//     const reader = new FileReader();

//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         setAvatarPreview(reader.result);
//         setValue("avatar", reader.result);
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const userData = new FormData();
      userData.append("name", data.name);
      userData.append("email", data.email);
    //   userData.set("password", data.password);
    //   userData.set("avatar", data.avatar);
        const message = await dispatch(updateProfile(userData));
        await dispatch(loadUser())
      console.log(userData,'nada');
      toast.success(message);

    } catch (error) {
      toast.error(error || "An error occured");
    }
    
  });
  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: 30 }}
      >
        <form
          className="border shadow p-3 rounded mt-10px"
          style={{ width: 450 }}
          onSubmit={onSubmit}
          noValidate
          encType="multipart/form-data"
        >
          <h1 className="text-center p-2" style={{ color: "#fc4c4e" }}>
            Register
          </h1>
          <div className="form-outline mb-2.5">
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 64,
                  message: "Password must be less than 30 bits",
                },
              })}
              id="name"
              className={
                errors.name
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="name"
              placeholder="Enter your Name"
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="name"></label>
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
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
          
          {/* <div className="form-group d-flex justify-content-between align-items-center mb-3 mt-2">
            <figure className="avatar item-rtl mr-3">
              <img
                src={avatarPreview}
                className="rounded-circle"
                alt="Avatar Preview"
              />
            </figure>
            <label className=" ml-3">Avatar</label>

            <div className="custom-file " style={{ marginLeft: 10 }}>
              <input
                type="file"
                name="avatar"
                className="form-control"
                id="customFile"
                accept="images/*"
                onChange={handleAvatar}
              />
            </div>
          </div> */}

          <button
            className="btn btn-primary btn-lg btn-block btn w-100 rounded mt-3 my-1.5"
            type="submit"
          
          >
            update
          </button>
          {/* <p className="text-danger"> {nonInputErrors}</p> */}
          <hr className="" />
          {/* <button className="btn btn-danger btn-lg btn-block btn w-100 rounded my-1.5">
            <i className="fab fa-google me-2" /> Signup with google
          </button> */}

         
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
