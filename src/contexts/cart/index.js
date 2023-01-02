import React, { useState, useEffect, useContext } from "react";
// we are making context to store data in seperate place where all the components can use it

const CartContext = React.createContext({});
const CartConsumer = CartContext.Consumer;

const CartProvider = ({ children }) => {
  //making state to manage cart functionality
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  // this function will run when user will click on add to to cart
  const setCartItems = (item) => {
    // we calculating the products and adding the into cart table
    let allItems = [];
    if (items.filter((el) => el?._id == item._id).length > 0) {
      allItems = items?.map((itm) => {
        if (itm?._id == item?._id) {
          return { ...itm, quantity: itm?.quantity + item?.quantity };
        } else {
          return itm;
        }
      });
      setItems(allItems);
    } else {
      // set products to the state
      setItems([...items, { ...item }]);
    }
  };
  // calculating total product and showing the number into the badge on the nav
  function countTotalItems() {
    let t = 0;
    items?.map((el) => {
      t += el?.quantity;
    });
    setTotal(t);
  }
  // this fumction will run first when this component will render it will calculate the products
  useEffect(() => {
    countTotalItems();
  }, [items]);

  return (
    // we making the provider with exporting the state so we can access them in another components
    <CartContext.Provider
      value={{ setCartItems, total, items, search, setSearch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartConsumer, CartProvider };
