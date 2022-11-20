import React from "react";
import {
  faArrowRight,
  faCartShopping,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarSharp, faTimer } from "@fortawesome/sharp-solid-svg-icons";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.jfif";
import twitter from "../../assets/images/twitter.png";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shopCards">
        <div style={{ position: "relative", display: "flex" }}>
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/99ddf081c1731e8ec3b7e695a277ca06.jpg"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Flow Blue Fashion Running Sneakers for Men
                </h6>
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
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/f808d0b9e7e1c67e8886c66de6cd35da.jpg"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Bata - Sneakers for Women
                </h6>
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
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/77dea86b3211318840d2575cb2fb1983.jpg"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Formal Shirt For Men and Boys
                </h6>
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
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/4ea4160d4bfcfc627bb89e58088a64de.png"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Mendeez Ore V-Neck T-Shir
                </h6>
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
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/2c9f1114a95da10341c0f963f3b1ffb3.jpg"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Movado Wrist Watch For Men
                </h6>
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
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/971d23f32645f6f42de9b0eea058f02f.png"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>
                  Stainless Steel Wrist Watch for Men
                </h6>
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
          <div className="product_card card grow" style={{ width: "19rem" }}>
            <img
              className="card-img-top"
              src="https://static-01.daraz.pk/p/7e95a47a9f7911c46328a1f7d4505e4b.jpg"
              style={{ width: "100%", height: "15rem" }}
              alt="immg"
            />
            <div className="card-body">
              <div>
                <h6 style={{ fontSize: "1.2rem" }}>BTS Caps for Men Stylish</h6>
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

      <div class="getInTouch">
        <div class="getInTouchMain">
          <h2 style={{ fontSize: "3rem", fontWeight: 700 }}>Get in Touch </h2>
          <div class="getIntouchPhone">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4 style={{ fontSize: "1.8rem" }}>Phone</h4>
              <p style={{ fontSize: "1.3rem" }}>+(234)0000000000</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, fugiat nihil!. Repellendus dolor quod tempora saepe.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4 style={{ fontSize: "1.8rem" }}>Email</h4>
              <p style={{ fontSize: "1.3rem" }}>contact@onlineshop.com</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <img
                  src={fb}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
                <img
                  src={insta}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
                <img
                  src={twitter}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
