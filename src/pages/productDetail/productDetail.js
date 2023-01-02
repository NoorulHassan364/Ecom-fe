import {
  faArrowRight,
  faCartShopping,
  faEye,
  faMinus,
  faPlus,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarSharp } from "@fortawesome/sharp-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import usericon from "../../assets/images/userIcon.png";
import { CartContext } from "../../contexts/cart";

const ProductDetail = () => {
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState(null);
  const [similarProdcts, setSimilarProdcts] = useState(null);
  const [review, setReview] = useState("");
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = async () => {
    try {
      let res = await api.get(`/admin/product/${id}`);
      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProducts = async () => {
    try {
      let res = await api.get(`/admin/product/?category=${product?.category}`);
      setSimilarProdcts(
        res.data.data?.filter((el) => el?._id !== product?._id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleReview = async () => {
    try {
      await api.post(`/review/${product?._id}`, { review });
      setReview("");
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    getSimilarProducts();
  }, [product, id]);
  return (
    <Container>
      <Row style={{ padding: "2rem" }}>
        <Col md={6} sm={12}>
          {/* <img className="img-fluid" src={product?.image} alt="imgg" /> */}

          <Carousel data-aos="fade-right">
            {product?.moreImages?.length > 0 ? (
              <Carousel.Item>
                <img
                  style={{ height: "23rem" }}
                  className="d-block w-100"
                  src={product?.moreImages[0]}
                  alt="First slide"
                />
              </Carousel.Item>
            ) : null}
            {product?.moreImages?.length > 1 ? (
              <Carousel.Item>
                <img
                  style={{ height: "23rem" }}
                  className="d-block w-100"
                  src={product?.moreImages[1]}
                  alt="Second slide"
                />
              </Carousel.Item>
            ) : null}
            {product?.moreImages?.length > 2 ? (
              <Carousel.Item>
                <img
                  style={{ height: "23rem" }}
                  className="d-block w-100"
                  src={product?.moreImages[2]}
                  alt="Third slide"
                />
              </Carousel.Item>
            ) : null}
          </Carousel>
        </Col>
        <Col md={6} sm={12} style={{ padding: "2rem 2rem" }}>
          <h3 style={{ fontFamily: "monospace" }}>{product?.name}</h3>
          <p style={{ color: "brown" }}>({product?.reviews?.length}) Ratings</p>
          <h2 style={{ marginTop: "2rem" }}>${product?.price}</h2>
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <p style={{ marginRight: "2rem" }}>Quantity:</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "5rem",
              }}
            >
              <FontAwesomeIcon
                icon={faMinus}
                style={{ color: "red", fontSize: "1.5rem" }}
                onClick={() => {
                  total > 0 ? setTotal(total - 1) : setTotal(total);
                }}
              />
              <p style={{ fontWeight: "bold" }}>{total}</p>
              <FontAwesomeIcon
                icon={faPlus}
                style={{ color: "green", fontSize: "1.5rem" }}
                onClick={() => setTotal(total + 1)}
              />
            </div>
          </div>
          <Button
            style={{
              marginTop: "2rem",
              backgroundColor: "rgb(208, 97, 30)",
              width: "15rem",
            }}
            onClick={() => {
              setCartItems({ ...product, quantity: total });
              setTotal(0);
            }}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>

      <div style={{ padding: "0rem 6rem", fontStyle: "italic" }}>
        <h4>Description:</h4>
        <p>{product?.description}</p>
      </div>
      <div style={{ padding: "2rem 6rem" }}>
        <h4>Reviews:</h4>
        {product?.reviews?.map((el) => {
          debugger;
          return (
            <h5 style={{ display: "flex", marginTop: "2rem" }}>
              <img src={usericon} alt="imgg" style={{ width: "2rem" }} />
              <p style={{ marginLeft: "1rem", fontFamily: "cursive" }}>{el}</p>
            </h5>
          );
        })}

        <div class="form-group mt-5" style={{ width: "auto" }}>
          <label for="exampleFormControlTextarea1">Write a Review</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <Button style={{ marginTop: "1rem" }} onClick={() => handleReview()}>
            Submit
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ marginTop: "1rem", textAlign: "center" }}>
          Similar Products
        </h4>
        <div className="shopCards">
          {similarProdcts?.map((el) => {
            return (
              <div style={{ position: "relative", display: "flex" }}>
                <div
                  className="product_card card grow"
                  style={{ width: "15rem" }}
                >
                  <img
                    className="card-img-top"
                    src={el?.image}
                    style={{ width: "100%", height: "15rem" }}
                    alt="immg"
                  />
                  <div className="card-body">
                    <div>
                      <h6 style={{ fontSize: "1.2rem" }}>{el?.name}</h6>
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
                            <span style={{ textAlign: "center" }}>
                              {el?.reviews?.length}
                            </span>
                          </div>
                          <div className="innerTextProduct">
                            <span className="innerTextProductTitle">
                              <FontAwesomeIcon
                                icon={faEye}
                                style={{ color: "darkorange" }}
                              />
                            </span>
                            <span>
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                onClick={() => navigate(`/product/${el?._id}`)}
                                style={{ color: "green", fontSize: "1.6rem" }}
                              />
                            </span>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
