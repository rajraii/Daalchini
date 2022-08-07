import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { makeStyles } from "@material-ui/core";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./Context/StateProvider";

const useStyles = makeStyles(() => ({
  main: {
    height: "100vh",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "1.5rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  lower: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "#1CAC78",
    height: "10vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.4rem",
  },
  subheading: {
    marginTop: "60px",
    color: "gray",
  },
  para: {
    marginRight: "1rem",
  },
  content: {
    padding: "20px",
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [state] = useStateValue();

  const proceedPayment = () => {
    state.forEach((item) => {
      item.qty = 0;
    });
    navigate("/payment");
  };

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <AiOutlineArrowLeft
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={() => navigate("/")}
        />{" "}
        Checkout
      </div>
      <div className={classes.content}>
        <div className={classes.subheading}>Pick Up</div>
        <div className="line" />
        <div>Test</div>
        <div>Daalchini Office Noida Uttar Pradesh</div>
        <div>Order expires within 30 mins</div>
        <div className={classes.subheading}>Cart Items</div>
        <div className="line" />
        <Table />
      </div>
      <div className={classes.lower}>
        <p className={classes.para}>Select Payment</p>{" "}
        <AiOutlineArrowRight
          style={{ cursor: "pointer" }}
          onClick={() => proceedPayment()}
        />
      </div>
    </div>
  );
};

export default Checkout;
