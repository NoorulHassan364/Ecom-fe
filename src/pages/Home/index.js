import React, { useEffect } from "react";
// importing icons
import {
  faArrowRight,
  faCartShopping,
  faEye,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarSharp, faTimer } from "@fortawesome/sharp-solid-svg-icons";
import Footer from "../../components/Footer";
// importing hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// importin base backend url
import api from "../../api";
// importing contexts
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const HomePage = () => {
  // declaring states
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [productsCopy, setProductsCopy] = useState(null);
  const { search, setSearch } = useContext(CartContext);
  // funtionction will run and take all the products from the backend and set into the state
  const getProducts = async () => {
    try {
      let res = await api.get(`/admin/products`);
      setProducts(res.data.data);
      setProductsCopy(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // this will run first when component will render
  useEffect(() => {
    getProducts();
  }, []);

  // funcion for handling search bar
  const filterProducts = () => {
    if (search == "" || !search) {
      setProducts(productsCopy);
    } else {
      setProducts(
        productsCopy?.filter((el) => el?.name?.toLowerCase().includes(search))
      );
    }
  };
  useEffect(() => {
    filterProducts();
  }, [search]);

  return (
    <div>
      {/* The following lines are just html for product card   */}
      <div className="shopCards">
        {products?.map((el) => {
          return (
            <div
              style={{
                position: "relative",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <div
                className="product_card card grow"
                style={{ width: "25rem" }}
              >
                <img
                  className="card-img-top"
                  src={el?.image}
                  style={{ width: "100%", height: "25rem" }}
                  alt="immg"
                  onClick={() => navigate(`/product/${el?._id}`)}
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
                              style={{
                                color: "green",
                                fontSize: "1.6rem",
                                cursor: "pointer",
                              }}
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
