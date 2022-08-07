import React from "react";

const CartItems = ({ item }) => {
  return (
    <div>
      <div>{item.title}</div>
      <div>{item.price}</div>
    </div>
  );
};

export default CartItems;
