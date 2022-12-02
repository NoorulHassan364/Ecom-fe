import React, { useState, useEffect, useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import { AuthContext } from "../../contexts/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faU,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logoBranding from "../../assets/images/logo.jpg";
import userIcon from "../../assets/images/userIcon.png";
import { CartContext } from "../../contexts/cart";

const NavBar = ({ user }) => {
  const { isLogin, signOut } = useContext(AuthContext);
  const { search, setSearch } = useContext(CartContext);
  const { total } = useContext(CartContext);

  const [currUser, setUser] = useState(null);
  const navigate = useNavigate();

  const onNavChange = (route) => {
    navigate(`/${route}`);
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  return currUser?.userType == "admin" ? null : (
    <>
      <Navbar className="navigation shadow" bg="light" expand="lg">
        {/* <Container> */}
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: "2rem" }}>
          <img className="navigation__logo" src={logoBranding} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
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
