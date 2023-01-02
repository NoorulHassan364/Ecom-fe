import React, { useState } from "react";
// imporitn useEffect hook
import { useEffect } from "react";
// importin table
import { Table } from "react-bootstrap";
// imporing backend url
import api from "../../api";

const Bookings = () => {
  // state in which all the booking will store after coming from the backend
  const [items, setItems] = useState([]);
  // function to get booking form the backend
  const getBookings = async () => {
    try {
      // sending request and geting response for the bookings
      let user = JSON.parse(localStorage.getItem("user"))._id;
      const res = await api.get(`/product/bookings/${user}`);
      setItems(res.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  // this will run first time when this page wil be render
  useEffect(() => {
    getBookings();
  }, []);

  return (
    // In the follwing lines there is a just simple table coming from the bootstrap
    <div
      className="container shadow"
      style={{ padding: "1rem", marginTop: "1rem" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ color: "grey" }}>My Bookings</h4>
      </div>
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Preview</th>
            <th>Quantity</th>
            <th>Reviews</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?.prod?.name}</td>
                <td>
                  <img
                    src={el?.prod?.image}
                    alt="imgg"
                    style={{ width: "8rem", height: "2rem" }}
                  />
                </td>
                <td>{el?.quantity}</td>
                <td>{el?.prod?.reviews?.length}</td>
                <td>{el?.prod?.price}</td>
                <td>{el?.prod?.price * el?.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;
