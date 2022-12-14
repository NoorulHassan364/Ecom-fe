import React, { useState, useEffect, useContext } from "react";
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
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const { isLogin, loginSuccess } = useContext(AuthContext);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const navigate = useNavigate();

  const validSchema = Yup.object().shape({
    email: Yup.string().email().required("required"),
    password: Yup.string().required("required").min(6, "At Least 6 digits"),
  });

  const validSchemaForgot = Yup.object().shape({
    email: Yup.string().email().required("required"),
  });

  const onSubmit = async (values) => {
    try {
      let res = await api.post("/auth/login", {
        ...values,
      });
      loginSuccess(res.data.token, res.data.user);
      if (res.data.user.userType == "user") {
        // navigate("/");
        window.location = "/";
      } else {
        // navigate("/admin/addProduct");
        window.location = "/admin/analytics";
      }
    } catch (err) {
      toast("Invalid Email or Password!");
      console.log(err);
    }
  };

  const onSubmitForgotPassword = async (values, resetForm) => {
    try {
      let res = await api.post("/auth/forgotPassword", {
        ...values,
      });
      toast("Please Check your email for the link!", { type: "success" });
      setForgotPasswordModal(false);
      resetForm();
    } catch (err) {
      toast("Invalid Email", { type: "error" });
      console.log(err);
    }
  };

  return (
    <section>
      <Container
        className="login_form"
        style={{ width: "25rem", padding: "3rem", marginTop: "2rem" }}
      >
        <p className="signup_heading2">Login to App!</p>
        <Formik
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
          validationSchema={validSchema}
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} id="user-register">
              <Form.Group controlId="email" as={Col} hasValidation>
                <Form.Label className="form__label">Email</Form.Label>
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
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password" as={Col} hasValidation>
                <Form.Label className="form__label">Password</Form.Label>
                <Form.Control
                  className="p-3 rounded-0"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
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
