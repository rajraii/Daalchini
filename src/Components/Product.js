import React from "react";
import { makeStyles } from "@material-ui/core";
import Add from "./Add";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
  },
  description: {
    fontSize: "0.8em",
  },
  mrp: {
    textDecoration: "line-through",
    color: "grey",
    marginLeft: "15px",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  prices: {
    display: "flex",
    justifyContent: "space-between",
  },
  data: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "1fr 9fr",
  },
  img: {
    margin: "20px",
    width: "75px",
    height: "75px",
  },
}));

const Product = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.data}>
      <img className={classes.img} src={data.image} alt={data.title} />
      <div>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.description}>{data.description}</div>
        <div className={classes.details}>
          <div className={classes.prices}>
            <div className={classes.price}>₹{data.price}</div>
            <div className={classes.mrp}>₹{data.mrp}</div>
          </div>
          <Add item={data} />
        </div>
      </div>
    </div>
  );
};

export default Product;
