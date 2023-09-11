import React from "react";
import Search from "../../product/search";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../../actions/authActions";

const Header = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const message = await dispatch(logout());
      toast.success(message);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="shadow p-3 mb-0.5 bg-white rounded"
      style={{backgroundColor:"white"}}
    
    >
      <Container fluid   >
        <Navbar.Brand href="/" style={{ fontSize: 32, color: "#fe7f9c" }}>
          Shoply
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {location.pathname === "/" && <Search />}
          </Nav>
          <Nav className="mr-100">
            {user ? (
              <>
                <figure className="avatar item-rtl mt-2">
                  <img
                    src={user.avatar && user.avatar.url}
                    className="rounded-circle"
                  />
                </figure>

                <NavDropdown
                  style={{ fontSize: 24, marginTop: 5 }}
                  title={user && user.name}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/me">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/orders/me">Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler} href="/">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              !loading && (
                <Nav.Link href="/login">
                  <button className="btn btn-danger mt-1">Login</button>
                </Nav.Link>
              )
            )}

            <Nav.Link href="/cart">
              <button
                type="button"
                className="btn"
                style={{ position: "relative", top: 3 }}
              >
                <FaShoppingCart size={30} />
                <span
                  className="badge bg-danger"
                  style={{ position: "absolute", right: 10, top: -12 }}
                >
                  {cartItems.length}
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
