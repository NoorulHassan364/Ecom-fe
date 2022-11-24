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
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const { isLogin, loginSuccess } = useContext(AuthContext);

  const navigate = useNavigate();

  const validSchema = Yup.object().shape({
    email: Yup.string().email().required("required"),
    password: Yup.string().required("required").min(6, "At Least 6 digits"),
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
        window.location = "/admin/addProduct";
      }
    } catch (err) {
      toast("Invalid Email or Password!");
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

              <Button
                style={{ margin: "auto", width: "17rem" }}
                className="button  button btn-block rounded-0"
                type="submit"
                form="user-register"
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default Index;
