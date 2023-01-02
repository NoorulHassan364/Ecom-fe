import React from "react";
// importing context
import { useContext } from "react";
// importing bootstrap table
import { Table } from "react-bootstrap";
// imprting backend url
import api from "../../api";
import { CartContext } from "../../contexts/cart";
// importin stripe for the payment
import { loadStripe } from "@stripe/stripe-js";

const CartItems = () => {
  const { setCartItems, items } = useContext(CartContext);
  // function wil run when user will click on procees to check out
  const onSubmit = async (values, resetForm) => {
    try {
      console.log("items", items);
      let user = JSON.parse(localStorage.getItem("user"))._id;
      const session = await api.post(`/product/checkout-session/${user}`, {
        items,
      });
      const stripePromise = loadStripe(
        "pk_test_51MCReNJGvKoAy1JTpiWwQH3lwaGfZ3CLRs4XrMpS8fCi4O2FVsSlVq3gGUTnisx6N11d7DRaNYrzBYxodE1aodYM006Skoeu5n"
      );
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id,
      });
      // toast("Updated Successfully!", { type: "success" });
      // navigate("/signin");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    // In the following lines there is a just simple coming from the bootstrap
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
          onClick={() => onSubmit()}
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
