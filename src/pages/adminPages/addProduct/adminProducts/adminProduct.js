import React from "react";
import {
  faArrowRight,
  faArrowUpFromBracket,
  faCartShopping,
  faPen,
  faTag,
  faTrash,
  faTShirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarSharp, faTimer } from "@fortawesome/sharp-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Col, Form, Modal } from "react-bootstrap";
import api from "../../../../api";

const AdminProducts = () => {
  const [products, setProducts] = useState(null);
  const [productModal, setProductModal] = useState(false);

  const [selectPic, setSelectPic] = useState(null);
  const [file, setFile] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  const validSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    price: Yup.string().required("required"),
    category: Yup.string().required("required"),
  });

  const handleFormikFileChange = (e, formik) => {
    let file = e.target.files[0];
    setSelectPic(file);
    setFile(URL.createObjectURL(e.target.files[0]));
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
        await api.patch(`/admin/product/${editProduct?._id}`, formData);
      } else {
        await api.patch(`/admin/product/${editProduct?._id}`, values);
      }
      resetForm();
      handleProductModalClose();
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      let res = await api.get(`/admin/products`);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/admin/product/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductModalClose = () => {
    setProductModal(false);
  };

  const handleEditProduct = (product) => {
    setProductModal(true);
    setEditProduct(product);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container-fluid college_container shadow">
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ color: "grey" }}>Products</h4>
      </div>
      <hr />

      <div className="shopCards">
        {products?.map((el) => {
          return (
            <div style={{ position: "relative", display: "flex" }}>
              <div className="college_card card" style={{ width: "23rem" }}>
                <img
                  className="card-img-top"
                  src={el?.image}
                  style={{ width: "100%", height: "23rem" }}
                  alt="immg"
                />
                <div className="card-body">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{el?.category}</span>
                  </div>
                  <div
                    className="card-title h5"
                    style={{ fontSize: "1.6rem", marginTop: "0.5rem" }}
                  >
                    {el?.name}
                  </div>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>${el?.price}</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>{el?.reviews?.length}</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "darkorange" }}
                          />
                        </span>
                        <span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            // onClick={() => navigate(`/product/${el?._id}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div class="collegeFavourite" style={{ cursor: "pointer" }}>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ color: "green" }}
                  onClick={() => handleEditProduct(el)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "red" }}
                  onClick={() => handleDeleteProduct(el?._id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        show={productModal}
        onHide={handleProductModalClose}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            onSubmit={(values, { resetForm }) => {
              onProductAddSubmit(values, resetForm);
            }}
            validationSchema={validSchema}
            enableReinitialize
            initialValues={{
              name: editProduct?.name,
              price: editProduct?.price,
              category: editProduct?.category,
              prodDescription: editProduct?.prodDescription,
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
                    <Form.Label className="form__label">
                      Product Name
                    </Form.Label>
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
                      isValid={
                        formik.touched.category && !formik.errors.category
                      }
                      isInvalid={
                        formik.touched.category && formik.errors.category
                      }
                      custom
                    >
                      <option value="" disabled>
                        CHOOSE
                      </option>
                      <option value="cloths">Cloths</option>
                      <option value="shoes">Shoes</option>
                      <option value="watches">Watches</option>
                      <option value="bags">Bags</option>
                      <option value="accessories">Accessories</option>
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
                      id="collegImg"
                      // value={formik.values.image}
                      onChange={(e) => handleFormikFileChange(e, formik)}
                      style={{ display: "none" }}
                    />
                    <br />
                    <div style={{ display: "flex" }}>
                      <label for="collegImg">
                        <FontAwesomeIcon
                          icon={faArrowUpFromBracket}
                          style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                        />
                      </label>
                      <img
                        style={{ width: "2rem" }}
                        src={file ? file : editProduct?.image}
                        alt=""
                      />
                    </div>
                  </Form.Group>
                </Form.Row>
                {/* <Form.Row> */}
                <Form.Group className="mb-3" controlId="prodDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
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
                {/* </Form.Row> */}
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleProductModalClose}>
            Close
          </Button>
          <Button className="button" type="submit" form="scholorshiperro">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProducts;
