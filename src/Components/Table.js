import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useStateValue } from "./Context/StateProvider";
import Add from "./Add";

const useStyles = makeStyles(() => ({
  main: {},
  table: {
    width: "100%",
    // margin: "30px",
    color: "#000",
  },
  product: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 1fr 1fr",
    margin: "20px",
  },
  total: {
    fontWeight: "bold",
  },
}));

const Table = () => {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [state] = useStateValue();

  useEffect(() => {
    const newCart = state.filter((item) => {
      return item.qty > 0;
    });
    setCart(newCart);
    let newPrice = 0;
    newCart.forEach((item) => {
      newPrice += item.price * item.qty;
    });
    setPrice(newPrice);
  }, [state]);

  return (
    <div className={classes.main}>
      <div className={classes.table}>
        <div className={classes.product}>
          <div>Items</div>
          <div>Qty.</div>
          <div>Amount</div>
        </div>
        {cart.map((item, index) => (
          <div className={classes.product}>
            <p>{item.title}</p>
            <Add item={item} />
            <p>Rs. {item.price * item.qty}</p>
          </div>
        ))}
        <div className="line"></div>
        <div className={classes.product}>
          <div style={{ fontWeight: "bold" }}>Total</div>
          <div></div>
          <div style={{ fontWeight: "bold" }}>Rs. {price}</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
