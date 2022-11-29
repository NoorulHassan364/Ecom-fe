import React, { useEffect } from "react";
import {
  faArrowRight,
  faCartShopping,
  faEye,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarSharp, faTimer } from "@fortawesome/sharp-solid-svg-icons";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      let res = await api.get(`/admin/products`);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="shopCards">
        {products?.map((el) => {
          return (
            <div style={{ position: "relative", display: "flex" }}>
              <div
                className="product_card card grow"
                style={{ width: "19rem" }}
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
                          <span>{el?.reviews?.length}</span>
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
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
