import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaSistrix, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavScrollExample() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow p-3 mb-5 bg-white rounded "
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontSize: 32, color: "#fe7f9c" }}>
          Shoply
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="nav-item rounded bg-light search-nav-item me-2 "
              />
              <Button variant="outline-danger">
                <FaSistrix />
              </Button>
            </Form>
          </Nav>
          <Nav className="mr-100">
            <figure className="avatar item-rtl mt-2">
              <img
                src={user.avatar && user.avatar.url}
                className="rounded-circle"
              />
            </figure>

            <NavDropdown
              style={{ fontSize: 24, marginTop: 5 }}
              title={user.name}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <button
                type="button"
                className="btn"
                style={{ position: "relative", top: 3 }}
              >
                <FaShoppingCart size={28} />
                <span
                  className="badge badge-danger ms-2 "
                  style={{ position: "absolute", right: 2 }}
                >
                  9
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
