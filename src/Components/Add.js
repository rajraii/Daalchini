import React, { useEffect, useState } from "react";
import { useStateValue } from "./Context/StateProvider";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  add: {
    backgroundColor: "#1CAC78",
    padding: "3px 20px",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    maxWidth: "fit-content",
  },
  qty: {
    display: "grid",
    border: "2px solid #1CAC78",
    gridTemplateColumns: "1fr 1fr 1fr",
    width: "70px",
    padding: "2px 0px",
    justifyItems: "center",
  },
}));

const Add = ({ item }) => {
  const [qty, setQty] = useState(item.qty);
  const [state, setState] = useStateValue();
  const classes = useStyles();

  useEffect(() => {
    const newData = state.map((curr) => {
      if (curr.id === item.id) {
        curr.qty = qty;
      }
      return curr;
    });
    setState(newData);
  }, [qty]);

  return (
    <div>
      {qty > 0 ? (
        <div className={classes.qty}>
          <div style={{ cursor: "pointer" }} onClick={() => setQty(qty - 1)}>
            -
          </div>
          <div style={{ cursor: "default" }}>{qty}</div>
          <div style={{ cursor: "pointer" }} onClick={() => setQty(qty + 1)}>
            +
          </div>
        </div>
      ) : (
        <div className={classes.add} onClick={() => setQty(qty + 1)}>
          ADD
        </div>
      )}
    </div>
  );
};

export default Add;
