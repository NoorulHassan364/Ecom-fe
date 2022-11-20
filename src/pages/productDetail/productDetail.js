import {
  faArrowRight,
  faCartShopping,
  faMinus,
  faPlus,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarSharp } from "@fortawesome/sharp-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import usericon from "../../assets/images/userIcon.png";
import { CartContext } from "../../contexts/cart";

const ProductDetail = () => {
  const [total, setTotal] = useState(0);
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container>
      <Row style={{ padding: "2rem" }}>
        <Col md={6} sm={12}>
          <img
            className="img-fluid"
            src="https://static-01.daraz.pk/p/99ddf081c1731e8ec3b7e695a277ca06.jpg"
            alt="imgg"
          />
        </Col>
        <Col md={6} sm={12} style={{ padding: "2rem 2rem" }}>
          <h3 style={{ fontFamily: "monospace" }}>
            Flow Blue Fashion Running Sneakers for Men
          </h3>
          <p style={{ color: "brown" }}>(45) Ratings</p>
          <h2 style={{ marginTop: "2rem" }}>$400</h2>
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
              setCartItems(total);
              setTotal(0);
            }}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>

      <div style={{ padding: "5rem" }}>
        <h4>Reviews:</h4>
        <h5 style={{ display: "flex", marginTop: "2rem" }}>
          <img src={usericon} alt="imgg" style={{ width: "2rem" }} />
          <p style={{ marginLeft: "1rem", fontFamily: "cursive" }}>
            This product so amazing ❤👍
          </p>
        </h5>
        <h5 style={{ display: "flex", marginTop: "1rem" }}>
          <img src={usericon} alt="imgg" style={{ width: "2rem" }} />
          <p style={{ marginLeft: "1rem", fontFamily: "cursive" }}>
            This product so amazing ❤👍
          </p>
        </h5>
        <h5 style={{ display: "flex", marginTop: "1rem" }}>
          <img src={usericon} alt="imgg" style={{ width: "2rem" }} />
          <p style={{ marginLeft: "1rem", fontFamily: "cursive" }}>
            This product so amazing ❤👍
          </p>
        </h5>
        <h5 style={{ display: "flex", marginTop: "1rem" }}>
          <img src={usericon} alt="imgg" style={{ width: "2rem" }} />
          <p style={{ marginLeft: "1rem", fontFamily: "cursive" }}>
            This product so amazing ❤👍
          </p>
        </h5>
        <h5 style={{ display: "flex", marginTop: "1rem" }}>
          <img src={usericon} alt="imgg" style={{ width: "2rem" }} />
          <p style={{ marginLeft: "1rem", fontFamily: "cursive" }}>
            This product so amazing ❤👍
          </p>
        </h5>

        <div class="form-group mt-5" style={{ width: "41rem" }}>
          <label for="exampleFormControlTextarea1">Write a Review</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
          ></textarea>

          <Button style={{ marginTop: "1rem" }}>Submit</Button>
        </div>
      </div>

      <div>
        <h4 style={{ marginTop: "1rem", textAlign: "center" }}>
          Similar Products
        </h4>
        <div className="shopCards">
          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/99ddf081c1731e8ec3b7e695a277ca06.jpg"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>Flow Blue Fashion Running Sneakers for Men</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
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

          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/f808d0b9e7e1c67e8886c66de6cd35da.jpg"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>Bata - Sneakers for Women</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                            onClick={() => navigate(`/product/${25}`)}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/77dea86b3211318840d2575cb2fb1983.jpg"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>Formal Shirt For Men and Boys</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                            // onClick={() => handleShop(el)}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/4ea4160d4bfcfc627bb89e58088a64de.png"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>Mendeez Ore V-Neck T-Shir</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                            // onClick={() => handleShop(el)}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/2c9f1114a95da10341c0f963f3b1ffb3.jpg"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>Movado Wrist Watch For Men</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                            // onClick={() => handleShop(el)}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/971d23f32645f6f42de9b0eea058f02f.png"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>Stainless Steel Wrist Watch for Men</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                            // onClick={() => handleShop(el)}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <div className="product_card card grow" style={{ width: "15rem" }}>
              <img
                className="card-img-top"
                src="https://static-01.daraz.pk/p/7e95a47a9f7911c46328a1f7d4505e4b.jpg"
                style={{ width: "100%", height: "15rem" }}
                alt="immg"
              />
              <div className="card-body">
                <div>
                  <h6>BTS Caps for Men Stylish</h6>
                  <p className="card-text">
                    <div className="innerTextProductMain">
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faTag}
                            style={{ color: "brown" }}
                          />
                        </span>
                        <span>$400</span>
                      </div>
                      <div className="innerTextProduct">
                        <span className="innerTextProductTitle">
                          <FontAwesomeIcon
                            icon={faStarSharp}
                            style={{ color: "blue" }}
                          />
                        </span>
                        <span>250</span>
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
                            onClick={() => navigate(`/product/${24}`)}
                            style={{ color: "green", fontSize: "1.6rem" }}
                            // onClick={() => handleShop(el)}
                          />
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
