import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Sidebar = () => {
  const [dropDownTitleVisible, setDropDownTitleVisible] = useState(true);
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "scroll initial",
          marginTop: 0,
        }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#E75480">
          <CDBSidebarHeader
            prefix={
              <i
                className="fa fa-bars fa-large"
                onClick={() => setDropDownTitleVisible(!dropDownTitleVisible)}
              ></i>
            }
          >
            <span style={{ color: "inherit" }}>Sidebar</span>
          </CDBSidebarHeader>
          <NavDropdown.Divider />
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink  to="/dashboard">
                <CDBSidebarMenuItem icon="columns">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>

              <NavDropdown
                title={
                  <>
                    <span className="fas fa-p me-3"></span>
                    {dropDownTitleVisible && <span>products</span>}
                  </>
                }
                style={{ marginLeft: 35 }}
              >
                <NavDropdown.Item href="/admin/products" className="text-muted">
                  All
                </NavDropdown.Item>

                <NavDropdown.Item href="/orders/me" className="text-muted">
                  create
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink  to="/profile">
                <CDBSidebarMenuItem icon="user">users</CDBSidebarMenuItem>
              </NavLink>

              <NavLink  to="/analytics" >
                <CDBSidebarMenuItem icon="shopping-cart">
                  orders
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
              
                to="/hero404"
                target="_blank"
              >
                <CDBSidebarMenuItem icon="star">reviews</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            ></div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
};

export default Sidebar;
