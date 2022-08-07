import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useStateValue } from "./Context/StateProvider";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductList from "./ProductList";
import Table from "./Table";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const useStyles = makeStyles(() => ({
  main: {
    position: "fixed",
    bottom: 0,
    height: "100px",
    backgroundColor: "#1CAC78",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  continue: {
    color: "white",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "8%",
  },
  container: {
    backgroundColor: "#168949",
    border: "none",
    padding: "5px 10px",
    borderRadius: "15px",
    marginRight: "50px",
    color: "#fff",
  },
  show: {
    position: "fixed",
    bottom: "100px",
    left: "0px",
    width: "100vw",
    backgroundColor: "white",
    display: "grid",
    alignItems: "center",
  },
  bgShow: {
    opacity: "1",
  },
  bghide: {
    opacity: "0.85",
    background: "#000",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  },
}));

const Summary = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [state] = useStateValue();
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

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

  const handleShowCart = () => {
    setShow(!show);
  };

  const proceedCheckout = () => {
    if (isLogin) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <ProductList />
      <div className={show ? classes.bghide : classes.bgShow}></div>
      <div className={classes.main}>
        <div className={classes.container}>
          <div style={{ display: "flex" }}>
            <div>{cart.length} item(s)</div>
            <div onClick={handleShowCart} style={{ marginLeft: "1rem" }}>
              {show ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>
          <div>Total Rs. {price}</div>
        </div>
        <div>
          {show ? (
            <div className={show ? classes.show : classes.hide}>
              <Table />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={classes.continue}>
          <div>{isLogin ? "Continue" : "Login"}</div>
          <AiOutlineArrowRight
            style={{ cursor: "pointer" }}
            onClick={() => proceedCheckout()}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
