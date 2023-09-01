import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../Common/loader";
import { Link } from "react-router-dom";
import "./style.css";
import UpdatePassword from "../../auth/updatePasswordModal";
import UpdateProfile from "../updateProfileModal";

const Profile = () => {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mt-5 mb-4  profile">My Profile</h2>
          <div className="row justify-content-around  user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile ">
                <img
                  className="rounded-circle  profile-avatar"
                  src={user.avatar.url}
                  alt={user.name}
                />
              </figure>
              <button
                id="edit_profile"
                className="btn btn-danger btn-lg btn-block btn w-100 rounded my-2"
                onClick={() => setShowUpdateProfileModal(true)}
              >
                Edit Profile
              </button>
              <UpdateProfile
                onClose={() => setShowUpdateProfileModal(false)}
                showModal={showUpdateProfileModal}
              />
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
                onClick={() => setShowUpdatePasswordModal(true)}
                className="btn btn-primary btn-block mt-5"
              >
                Change Password
              </button>
              <UpdatePassword
                showModal={showUpdatePasswordModal}
                onClose={() => setShowUpdatePasswordModal(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Profile;
