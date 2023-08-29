import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../Common/loader";
import { Link } from "react-router-dom";
import "./style.css";
import NavScrollExample from "../../Test";
import UpdatePassword from "../../auth/updatePasswordModal";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavScrollExample />
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mt-5 mb-4 profile">My Profile</h2>
          <div className="row justify-content-around  user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile ">
                <img
                  className="rounded-circle img-fluid"
                  src={user.avatar.url}
                  alt={user.name}
                />
              </figure>
              <Link
                to="/me/update"
                id="edit_profile"
                className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
              >
                Edit Profile
              </Link>
            </div>

            <div className="col-12 col-md-5 ">
              <h4>Full Name</h4>
              <p>{user.name}</p>

              <h4>Email Address</h4>
              <p>{user.email}</p>

              <h4>Joined On</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>

              {user.role !== "admin" && (
                <Link
                  to="/orders/me"
                  className="btn btn-danger btn-block mt-5 me-5"
                >
                  My Orders
                </Link>
              )}

              <button
                onClick={() => setShowModal(true)}
                className="btn btn-primary btn-block mt-5"
              >
                Change Password
              </button>
              <UpdatePassword
                showModal={showModal}
                onClose={() => setShowModal(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Profile;
