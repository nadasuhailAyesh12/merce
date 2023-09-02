

// function NavScrollExample() {
//   const { user, loading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const logoutHandler = async () => {
//     try {
//       const message = await dispatch(logout());
//       toast.success(message);
//     } catch (error) {
//       toast.error(error);
//     }
//   };

//   return (
//     <Navbar
//       expand="lg"
//       className="bg-body-tertiary shadow p-3 mb-5 bg-white rounded "
//     >
//       <Container fluid>
//         <Navbar.Brand href="#" style={{ fontSize: 32, color: "#fe7f9c" }}>
//           Shoply
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0 "
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Search />
//           </Nav>
//           <Nav className="mr-100">
//             {user ? (
//               <>
//                 <figure className="avatar item-rtl mt-2">
//                   <img
//                     src={user.avatar && user.avatar.url}
//                     className="rounded-circle"
//                   />
//                 </figure>

//                 <NavDropdown
//                   style={{ fontSize: 24, marginTop: 5 }}
//                   title={user && user.name}
//                   id="navbarScrollingDropdown"
//                 >
//                   <NavDropdown.Item href="/me">Profile</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="/orders/me">Orders</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item onClick={logoutHandler} href="/login">
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             ) : (
//               !loading && (
//                 <Nav.Link href="/login">
//                   <button className="btn btn-danger mt-1">Login</button>
//                 </Nav.Link>
//               )
//             )}

//             <Nav.Link href="/cart">
//               <button
//                 type="button"
//                 className="btn"
//                 style={{ position: "relative", top: 3 }}
//               >
//                 <FaShoppingCart size={30} />
//                 <span
//                   className="badge badge-danger ms-2 "
//                   style={{ position: "absolute", right: 2 }}
//                 >
//                   9
//                 </span>
//               </button>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
