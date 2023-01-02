// importing react , and other hooks
import React, { useState, useEffect, useContext } from "react";
// importing components form react-bootstrap
import {
  Nav,
  Navbar,
  Button,
  Container,
  Row,
  Col,
  Card,
  NavDropdown,
  Form,
} from "react-bootstrap";
// importing link and navigate to redirect to the other pages
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
// importing auth conext so that we can access the functions of context
import { AuthContext } from "../../contexts/auth";
// imporitng FontAwesomeIcon to adding the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faU,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// imporitn image for logo
import logoBranding from "../../assets/images/logo.jpg";
import userIcon from "../../assets/images/userIcon.png";
import { CartContext } from "../../contexts/cart";

const NavBar = ({ user }) => {
  // importing fuinctions to the context when user login or signout then below fuctions will run
  const { isLogin, signOut } = useContext(AuthContext);
  // importing search fuinctions to the search context
  const { search, setSearch } = useContext(CartContext);
  const { total } = useContext(CartContext);
  // seting current user to this state
  const [currUser, setUser] = useState(null);
  const navigate = useNavigate();
  // when we change the pages then function will handle
  const onNavChange = (route) => {
    navigate(`/${route}`);
  };
  // useEffect will run first ever when this component will render
  useEffect(() => {
    // geting user from localStorage and seting to the state
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  // if current user is amdin then we are showing nothing other wise navbar
  return currUser?.userType == "admin" ? null : (
    <>
      {/* using navbar that import form the bootstrap */}
      <Navbar className="navigation shadow" bg="light" expand="lg">
        {/* adding logo  */}
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: "2rem" }}>
          <img className="navigation__logo" src={logoBranding} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
            {/* adding search bar  */}
            <Form className="d-flex" style={{ margin: "auto" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                style={{ width: "17rem" }}
              />
              {/* <Button variant="outline-dark" style={{ height: "2.3rem" }}>
                Search
              </Button> */}
            </Form>
            {/* dorpdown on the navbar when user will be logged in  */}
            <div className="nav_right">
              {isLogin ? (
                <>
                  <NavDropdown
                    title={
                      <img
                        src={userIcon}
                        alt="imgg"
                        style={{ width: "2rem" }}
                      />
                    }
                    style={{ marginRight: "1rem" }}
                  >
                    <NavDropdown.Item onClick={() => navigate("/products")}>
                      Products
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/bookings")}>
                      My Bookings
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/profile")}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                  <div style={{ marginRight: "3rem", display: "flex" }}>
                    <div>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ fontSize: "1.5rem", cursor: "pointer" }}
                        onClick={() => navigate("/cartItems")}
                      />
                    </div>
                    <p className="cartTotal">{total}</p>
                  </div>
                </>
              ) : (
                // if user is not looged then we will show this
                <div className="nav_btns">
                  <Button
                    variant="primary"
                    className="nav_btn"
                    onClick={() => onNavChange("signup")}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="nav_btn signin_btn_hover"
                    onClick={() => onNavChange("signIn")}
                  >
                    Log In
                  </Button>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
};

export default NavBar;
