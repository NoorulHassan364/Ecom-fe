import React from "react";
// importin components form the bootstrap
import { Button, Col, Container, Form } from "react-bootstrap";
// formik and yup fopr validation
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../api";
// link and navigate to redirect user to another pages
import { Link, useNavigate, useParams } from "react-router-dom";
// toat for Notification
import { toast } from "react-toastify";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // validations for the forgot password
  const validSchema = Yup.object().shape({
    password: Yup.string()
      .required("required")
      .min(6, "At Least 6 digits")
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
    confirmPassword: Yup.string()
      .required("required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  // funtion will run onclick submit forgot passowrd form
  const onSubmit = async (values, resetForm) => {
    try {
      const res = await api.patch(`/auth/updateUser/${id}`, {
        password: values?.password,
      });
      toast("Updated Successfully!", { type: "success" });
      navigate("/signin");
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <section>
      {/* we are just using the container and form coming form the bootstrap similar in the signin page I explained  */}
      <Container
        className="login_form"
        style={{ width: "25rem", padding: "3rem", marginTop: "2rem" }}
      >
        <p className="signup_heading2">Create Your New Password!</p>
        <Formik
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
          validationSchema={validSchema}
          enableReinitialize
          initialValues={{
            confirmPassword: "",
            password: "",
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} id="user-register">
              <Form.Group controlId="password" as={Col} hasValidation>
                <Form.Label className="form__label">Password</Form.Label>
                <Form.Control
                  className="p-3 rounded-0"
                  type="text"
                  name="password"
                  placeholder="Enter new Password"
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
              <Form.Group controlId="confirmPassword" as={Col} hasValidation>
                <Form.Label className="form__label">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  className="p-3 rounded-0"
                  type="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={
                    formik.touched.confirmPassword &&
                    !formik.errors.confirmPassword
                  }
                  isInvalid={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                style={{ margin: "auto", width: "17rem", marginTop: "1rem" }}
                className="button  button btn-block rounded-0"
                type="submit"
                form="user-register"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default ForgotPassword;
