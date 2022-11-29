import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import nike from "../../assets/images/nike.jpg";
import gucci from "../../assets/images/gucci.png";
import dolce from "../../assets/images/dolce.png";
import addidas from "../../assets/images/addidas.png";
import edenrobe from "../../assets/images/edenrobe.png";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.jfif";
import twitter from "../../assets/images/twitter.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  faCannabis,
  faCartShopping,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCardFront } from "@fortawesome/sharp-solid-svg-icons";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="section_header">
        <div className="header_text" data-aos="fade-up">
          <h1 className="header_h1">
            Happiness is not in money,
            <br />
            but in shopping
          </h1>
          <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
            <strong>
              A world with endless
              <br />
              Possibilities
            </strong>
          </p>
          <button
            type="button"
            className="header_getStartedBtn btn btn-primary"
            onClick={() => handleGetStarted()}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="section_toolsAndResources" data-aos="fade-down">
        <div className="row" style={{ padding: "7rem" }}>
          <div className="col-md-5 col-sm-12">
            <h2
              style={{ fontSize: "2.3rem", fontWeight: 700, lineHeight: 1.2 }}
            >
              A quick walk through of how easy it is to doing shoping with us
            </h2>
            <p style={{ fontSize: "1.1rem", marginTop: "4rem" }}>
              As a leading eCommerce platform, we rethink the various ways our
              products and services can help satisfy our customers needs and
              wants with affordable products that meets their taste
            </p>
          </div>

          <div className="col-md-7 col-sm-12">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                rowGap: "1rem",
              }}
            >
              <div className="shadow walkThroughCards" data-aos="fade-right">
                <div style={{ display: "flex" }}>
                  <h4 style={{ textAlign: "center" }}>Select Product</h4>
                  <FontAwesomeIcon
                    icon={faHandPointer}
                    style={{
                      marginLeft: "0.4rem",
                      color: "blue",
                      fontSize: "1.4rem",
                    }}
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  pariatur laudantium ad vero, natus dicta numquam facere
                  consectetur vel est magnam!
                </p>
              </div>
              <div className="shadow walkThroughCards" data-aos="fade-left">
                <div style={{ display: "flex" }}>
                  <h4 style={{ textAlign: "center" }}>Add to Cart</h4>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{
                      marginLeft: "0.4rem",
                      color: "brown",
                      fontSize: "1.3rem",
                    }}
                  />
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  pariatur laudantium ad vero, natus dicta numquam facere
                  consectetur vel est magnam!
                </p>
              </div>
              <div className="shadow walkThroughCards" data-aos="fade-right">
                <div style={{ display: "flex" }}>
                  <h4 style={{ textAlign: "center" }}>Pay</h4>
                  <FontAwesomeIcon
                    icon={faCreditCardFront}
                    style={{
                      marginLeft: "0.4rem",
                      color: "cadetblue",
                      fontSize: "1.3rem",
                    }}
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  pariatur laudantium ad vero, natus dicta numquam facere
                  consectetur vel est magnam!
                </p>
              </div>
              <div className="shadow walkThroughCards" data-aos="fade-left">
                <div style={{ display: "flex" }}>
                  <h4 style={{ textAlign: "center" }}>Enjoy</h4>
                  <FontAwesomeIcon
                    icon={faCannabis}
                    style={{
                      marginLeft: "0.4rem",
                      color: "yellowgreen",
                      fontSize: "1.3rem",
                    }}
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  pariatur laudantium ad vero, natus dicta numquam facere
                  consectetur vel est magnam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section_carousal">
        <div class="row" style={{ padding: "2rem" }}>
          <div class="col-md-6 col-sm-12">
            <div class="seeMoreMain" data-aos="fade-left">
              <h1
                style={{ fontSize: "2.8rem", fontWeight: 700, lineHeight: 1.2 }}
              >
                A world with endless
                <br /> Possibilities
              </h1>
              <button type="button" class="seeMoreBtn btn btn-primary">
                See More
              </button>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <Carousel data-aos="fade-right">
              <Carousel.Item>
                <img className="d-block w-100" src={slide2} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div class="ourPartners">
        <h1 class="ourpartnerHeading">Our Partners</h1>
        <div class="ourPartnersImages" data-aos="fade-up">
          <img src={nike} alt="" style={{ width: "8rem" }} />
          <img src={gucci} alt="" style={{ width: "8rem" }} />
          <img src={addidas} alt="" style={{ width: "8rem" }} />
          <img src={dolce} alt="" style={{ width: "8rem" }} />
          <img src={edenrobe} alt="" style={{ width: "8rem" }} />
        </div>
      </div>

      <div class="getInTouch">
        <div class="getInTouchMain">
          <h2 style={{ fontSize: "3rem", fontWeight: 700 }}>Get in Touch </h2>
          <div class="getIntouchPhone">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4 style={{ fontSize: "1.8rem" }}>Phone</h4>
              <p style={{ fontSize: "1.3rem" }}>+(353)0000000000</p>
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

export default LandingPage;
