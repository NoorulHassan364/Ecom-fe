import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import api from "../../api";

const Bookings = () => {
  const [items, setItems] = useState([]);
  const getBookings = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"))._id;
      const res = await api.get(`/product/bookings/${user}`);
      setItems(res.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getBookings();
  }, []);

  return (
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
