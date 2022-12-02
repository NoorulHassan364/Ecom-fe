import React, { useState, useEffect, useContext } from "react";

const CartContext = React.createContext({});
const CartConsumer = CartContext.Consumer;

const CartProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  const setCartItems = (item) => {
    console.log(items);
    debugger;
    let allItems = [];
    if (items.filter((el) => el?._id == item._id).length > 0) {
      allItems = items?.map((itm) => {
        if (itm?._id == item?._id) {
          return { ...itm, quantity: itm?.quantity + item?.quantity };
        } else {
          return itm;
        }
      });
      console.log("allItems", allItems);
      setItems(allItems);
    } else {
      setItems([...items, { ...item }]);
    }
  };

  const countTotalItems = () => {
    console.log("items in count", items);
    debugger;
    let t = 0;
    items?.map((el) => {
      t += el?.quantity;
    });
    setTotal(t);
  };

  useEffect(() => {
    countTotalItems();
  }, [items]);

  return (
    <CartContext.Provider
      value={{ setCartItems, total, items, search, setSearch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartConsumer, CartProvider };
