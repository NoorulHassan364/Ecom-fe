import React, { useState, useEffect, useContext } from "react";
// importing components form the react-bootstrap
import {
  Row,
  Col,
  Form,
  Container,
  Button,
  Alert,
  Tabs,
  Tab,
  Modal,
  Spinner,
} from "react-bootstrap";
// importing formik and yup for the validation
import { Formik } from "formik";
import * as Yup from "yup";
// importin our base  url for the backend
import api from "../../api";
// importin link to redirect to another page
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
// importing the toastify notification css
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imporitn icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  // destructuring the AuthContext
  const { isLogin, loginSuccess } = useContext(AuthContext);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  // making validations of signin form
  const validSchema = Yup.object().shape({
    email: Yup.string().email().required("required"),
    password: Yup.string().required("required").min(6, "At Least 6 digits"),
  });
  // making validations of forgot passowrd
  const validSchemaForgot = Yup.object().shape({
    email: Yup.string().email().required("required"),
  });
  // this function will run when user will click on signin
  const onSubmit = async (values) => {
    try {
      // it is hitting the api of our backend and getting the response
      let res = await api.post("/auth/login", {
        ...values,
      });
      // after geting the response this func is runing and it is taking token and user data coming from the backend
      loginSuccess(res.data.token, res.data.user);
      if (res.data.user.userType == "user") {
        // navigate("/");
        // then we are navifating the user to home page after successfully logged in
        window.location = "/";
      } else {
        // navigate("/admin/addProduct");
        // if the user will be admin then we navigating the admin to their dashboard
        window.location = "/admin/analytics";
      }
    } catch (err) {
      // when user will enter the wrong email or passwor this will run
      toast("Invalid Email or Password!");
      console.log(err);
    }
  };

  const onSubmitForgotPassword = async (values, resetForm) => {
    try {
      // it is hitting the api of our backend and getting the response
      let res = await api.post("/auth/forgotPassword", {
        ...values,
      });
      // sending notification
      toast("Please Check your email for the link!", { type: "success" });
      setForgotPasswordModal(false);
      // empty form after submit
      resetForm();
    } catch (err) {
      toast("Invalid Email", { type: "error" });
      console.log(err);
    }
  };

  return (
    <section>
      {/* using container coming from the react-bootstrap  */}
      <Container
        className="login_form"
        style={{ width: "25rem", padding: "3rem", marginTop: "2rem" }}
      >
        <p className="signup_heading2">Login to App!</p>
        {/* using fromik for form validatons  */}
        <Formik
          // declaring the function when user will click on onSubmit
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
          // attaching the validation schema for validation
          validationSchema={validSchema}
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {(formik) => (
            // using Form coming from the react-bootstrap
            <Form onSubmit={formik.handleSubmit} id="user-register">
              <Form.Group controlId="email" as={Col} hasValidation>
                {/* Email inpur field label  */}
                <Form.Label className="form__label">Email</Form.Label>
                {/* Email input field  */}
                <Form.Control
                  className="p-3 rounded-0"
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                {/* validation errors will show here  */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password" as={Col} hasValidation>
                {/* password input field label  */}
                <Form.Label className="form__label">Password</Form.Label>
                {/* input field for password  */}
                <div style={{ position: "relative", display: "flex" }}>
                  <Form.Control
                    className="p-3 rounded-0"
                    type={passwordType}
                    name="password"
                    placeholder="Enter Your Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.password && !formik.errors.password}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  {/* creating eye button to view or hide the password  */}
                  {passwordType == "text" ? (
                    <FontAwesomeIcon
                      onClick={() => setPasswordType("password")}
                      icon={faEyeSlash}
                      style={{
                        fontSize: "1rem",
                        color: "grey",
                        cursor: "pointer",
                        position: "absolute",
                        right: "2%",
                        marginTop: "0.7rem",
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => setPasswordType("text")}
                      icon={faEye}
                      style={{
                        fontSize: "1rem",
                        color: "grey",
                        cursor: "pointer",
                        position: "absolute",
                        right: "2%",
                        marginTop: "0.7rem",
                      }}
                    />
                  )}
                </div>
                {/* password validation error will show here  */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Link
                to="#"
                onClick={() => setForgotPasswordModal(true)}
                style={{ marginTop: "0.3rem", marginLeft: "1rem" }}
              >
                Forgot Password?
              </Link>
              {/* signin button  */}
              <Button
                style={{ margin: "auto", width: "17rem", marginTop: "1rem" }}
                className="button  button btn-block rounded-0"
                type="submit"
                form="user-register"
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
        {/* creating modal for forgot passowrd form  */}
        <Modal
          show={forgotPasswordModal}
          onHide={() => setForgotPasswordModal(false)}
          centered
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>Forgot Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              onSubmit={(values, { resetForm }) => {
                onSubmitForgotPassword(values, resetForm);
              }}
              validationSchema={validSchemaForgot}
              enableReinitialize
              initialValues={{
                email: "",
              }}
            >
              {(formik) => (
                <Form
                  onSubmit={formik.handleSubmit}
                  id="scholorshiperro"
                  style={{ padding: "1rem" }}
                >
                  <Form.Row>
                    <Form.Group controlId="name" as={Col} hasValidation>
                      <Form.Label className="form__label">Email</Form.Label>
                      <Form.Control
                        className="p-3 rounded-0"
                        type="text"
                        name="email"
                        placeholder="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.email && !formik.errors.email}
                        isInvalid={formik.touched.email && formik.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                </Form>
              )}
            </Formik>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setForgotPasswordModal(false)}
            >
              Close
            </Button>
            <Button className="button" type="submit" form="scholorshiperro">
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Index;
