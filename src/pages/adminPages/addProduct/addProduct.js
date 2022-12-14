import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Table } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../../api";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [selectPic, setSelectPic] = useState(null);
  const [file, setFile] = useState(null);
  const [moreImage, setMoreImage] = useState([]);
  const [moreImageUrl, setMoreImageUrl] = useState([]);
  const [categories, setCategories] = useState(null);
  const [productModal, setProductModal] = useState(false);
  const [resProduct, setResProduct] = useState(null);
  const navigate = useNavigate();

  const validSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    price: Yup.string().required("required"),
    category: Yup.string().required("required"),
    prodDescription: Yup.string().required("required"),
  });

  const handleFormikFileChange = (e, formik) => {
    let file = e.target.files[0];
    setSelectPic(file);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleMoreImagesChange = (e) => {
    debugger;
    let files = e.target.files;
    debugger;
    setMoreImage([files[0], files[1], files[2]]);
    setMoreImageUrl([
      URL.createObjectURL(e.target.files[0]),
      URL.createObjectURL(e.target.files[1]),
      URL.createObjectURL(e.target.files[2]),
    ]);
  };

  const onProductAddSubmit = async (values, resetForm) => {
    try {
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

  const getCategories = async () => {
    try {
      let res = await api.get(`/admin/category`);
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductModalClose = () => {
    setProductModal(false);
    navigate("/admin/products");
  };

  const handleMoreiMgesSubmit = async () => {
    try {
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
