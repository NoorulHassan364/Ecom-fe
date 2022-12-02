import React from "react";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import { CartContext } from "../../contexts/cart";

const CartItems = () => {
  const { setCartItems, items } = useContext(CartContext);

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
        <h4 style={{ color: "grey" }}>Cart Items</h4>
        <button
          type="button"
          className="header_checkoutBtn btn btn-primary"
          // onClick={() => handleGetStarted()}
        >
          Proceed to Checkout
        </button>
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
                <td>{el?.name}</td>
                <td>
                  <img
                    src={el?.image}
                    alt="imgg"
                    style={{ width: "8rem", height: "2rem" }}
                  />
                </td>
                <td>{el?.quantity}</td>
                <td>{el?.reviews?.length}</td>
                <td>{el?.price}</td>
                <td>{el?.price * el?.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CartItems;
