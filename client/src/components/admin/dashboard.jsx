import React from "react";
import Sidebar from "./adminsideBar";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <h1 className="my-4">Dashboard</h1>
          <>
            <div className="row pr-4">
              <div className="col-xl-12 col-sm-12 mb-5">
                <h2 className="text-center"> {`Total Amount: $5`}</h2>
              </div>
            </div>

            <div className="row pr-4">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center fs-2">
                      Products
                      <br /> <b className="fs-3">{10}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/products"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center fs-2">
                      Orders
                      <br /> <b className="fs-3">{30}</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/orders"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center fs-2">
                      Users
                      <br /> <b className="fs-3">50</b>
                    </div>
                  </div>
                  <Link
                    className="card-footer text-white clearfix small z-1"
                    to="/admin/users"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-dark o-hidden h-100">
                  <div className="card-body">
                    <div className="text-center fs-2">
                      Out of Stock
                      <br /> <b className="fs-3">20</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
