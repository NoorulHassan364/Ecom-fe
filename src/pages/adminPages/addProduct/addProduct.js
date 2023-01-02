import React, { useEffect, useState } from "react";
// importing components form the bootstrap
import { Button, Col, Form, Modal, Table } from "react-bootstrap";
// formik and yup for the validation
import * as Yup from "yup";
import { Formik } from "formik";
// imporing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing backend url
import api from "../../../api";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
// useNavigate to redirect to anoter page
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  // declaring states to manage add product component
  const [selectPic, setSelectPic] = useState(null);
  const [file, setFile] = useState(null);
  const [moreImage, setMoreImage] = useState([]);
  const [moreImageUrl, setMoreImageUrl] = useState([]);
  const [categories, setCategories] = useState(null);
  const [productModal, setProductModal] = useState(false);
  const [resProduct, setResProduct] = useState(null);
  const navigate = useNavigate();
  // validationSchema for add productModal form
  const validSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    price: Yup.string().required("required"),
    category: Yup.string().required("required"),
    prodDescription: Yup.string().required("required"),
  });
  // this will whenn we add a image into the product
  const handleFormikFileChange = (e, formik) => {
    let file = e.target.files[0];
    setSelectPic(file);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  // thi will run when we add multiple images into the product
  const handleMoreImagesChange = (e) => {
    let files = e.target.files;
    setMoreImage([files[0], files[1], files[2]]);
    setMoreImageUrl([
      URL.createObjectURL(e.target.files[0]),
      URL.createObjectURL(e.target.files[1]),
      URL.createObjectURL(e.target.files[2]),
    ]);
  };
  // this will run when when click on submit after fillin the product form
  const onProductAddSubmit = async (values, resetForm) => {
    try {
      // adding the pics into the formdata so that backend can understand
      if (selectPic) {
        const formData = new FormData();
        for (const key in values) {
          if (Array.isArray(values[key])) {
            formData.append(key, JSON.stringify(values[key]));
          } else {
            if (values[key] !== null) formData.append(key, values[key]);
          }
        }
        formData.append("photo", selectPic);
        let res = await api.post(`/admin/product`, formData);
        setResProduct(res.data.data);
        setProductModal(true);
        resetForm();
        // navigate("/admin/products");
      } else {
        window.alert("Please Select the Image");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function for geting all the categories
  const getCategories = async () => {
    try {
      let res = await api.get(`/admin/category`);
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // this will run when we close the product modal
  const handleProductModalClose = () => {
    setProductModal(false);
    navigate("/admin/products");
  };
  // this will run when we add more images and submit
  const handleMoreiMgesSubmit = async () => {
    try {
      // adding all images into formdata so that backend will understand
      for (let i = 0; i < moreImage?.length; i++) {
        let formData = new FormData();
        formData.append("photo", moreImage[i]);

        await api.patch(`/admin/product/images/${resProduct?._id}`, formData);
      }
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    // In the following lines we just using Simple HTML and bootstrap components and form similar like in signin page I explained to add the product
    <div className="container-fluid shadow college_container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ color: "grey" }}>Add Product</h4>
      </div>
      <hr />
      <div>
        <Formik
          onSubmit={(values, { resetForm }) => {
            onProductAddSubmit(values, resetForm);
          }}
          validationSchema={validSchema}
          enableReinitialize
          initialValues={{
            name: "",
            price: "",
            category: "",
            prodDescription: "",
          }}
        >
          {(formik) => (
            <Form
              onSubmit={formik.handleSubmit}
              id="addProduct"
              style={{ padding: "1rem" }}
            >
              <Form.Row>
                <Form.Group controlId="name" as={Col} hasValidation>
                  <Form.Label className="form__label">Product Name</Form.Label>
                  <Form.Control
                    className="p-3 rounded-0"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.name && !formik.errors.name}
                    isInvalid={formik.touched.name && formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="category" as={Col} hasValidation>
                  <Form.Label className="form__label">category</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    name="category"
                    placeholder="Enter category"
                    value={formik.values.category}
                    onChange={(e) => formik.handleChange(e)}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.category && !formik.errors.category}
                    isInvalid={
                      formik.touched.category && formik.errors.category
                    }
                    custom
                  >
                    <option value="" disabled>
                      CHOOSE
                    </option>
                    {categories?.map((el) => {
                      return <option value={el?.name}>{el?.name}</option>;
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.category}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="price" as={Col} hasValidation>
                  <Form.Label className="form__label">Price</Form.Label>
                  <Form.Control
                    className="p-3 rounded-0"
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.price && !formik.errors.price}
                    isInvalid={formik.touched.price && formik.errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.price}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="image" as={Col} hasValidation>
                  <Form.Label className="form__label">Image</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="file"
                    name="image"
                    id="productImg"
                    // value={formik.values.image}
                    onChange={(e) => handleFormikFileChange(e, formik)}
                    style={{ display: "none" }}
                  />
                  <br />
                  <div style={{ display: "flex" }}>
                    <label for="productImg">
                      <FontAwesomeIcon
                        icon={faArrowUpFromBracket}
                        style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                      />
                    </label>
                    <img style={{ width: "2rem" }} src={file} alt="" />
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  style={{ width: "50%" }}
                  className="mb-3"
                  controlId="prodDescription"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    value={formik.values.prodDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={
                      formik.touched.prodDescription &&
                      !formik.errors.prodDescription
                    }
                    isInvalid={
                      formik.touched.prodDescription &&
                      formik.errors.prodDescription
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.prodDescription}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Button
                className="button  button btn-block rounded-0"
                type="submit"
                form="addProduct"
                style={{ width: "7rem", margiTop: "1rem" }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <Modal
        show={productModal}
        onHide={handleProductModalClose}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>More to Add More Images?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Control
              className="rounded-0"
              type="file"
              name="image"
              id="collegImg"
              // value={formik.values.image}
              onChange={(e) => handleMoreImagesChange(e)}
              style={{ display: "none" }}
              multiple
            />
            <label for="collegImg">
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              />
            </label>
            {moreImageUrl?.map((el) => {
              return <img style={{ width: "2rem" }} src={el} alt="" />;
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleProductModalClose}>
            Close
          </Button>
          <Button className="button" onClick={() => handleMoreiMgesSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
