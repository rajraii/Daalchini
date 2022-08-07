import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ProductList from "./ProductList";

const useStyles = makeStyles(() => ({
  main: {
    position: "fixed",
    bottom: 0,
    height: "200px",
    backgroundColor: "white",
    width: "100vw",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 100px",
  },
  heading: {
    borderBottom: "1px solid lightgrey",
    padding: "10px 0px",
    fontSize: "15px",
    marginBottom: "35px",
  },
  input: {
    padding: "5px 10px",
    width: "100%",
    borderRadius: "3px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#1CAC78",
    color: "white",
    fontSize: "15px",
    width: "100%",
    padding: "6px",
    borderRadius: "4px",
    border: "none",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [login, setLogin] = useState(true);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const verifyOtp = () => {
    if (otp === "888888") {
      localStorage.setItem("isLogin", true);
      navigate("/checkout");
    } else {
      setError("Invalid Otp");
    }
  };

  return (
    <>
      <ProductList />
      <div className={classes.main}>
        {login === true ? (
          <div className={classes.body}>
            <div className={classes.heading}>Login</div>
            <input
              className={classes.input}
              type="text"
              placeholder="Enter you phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button className={classes.button} onClick={() => setLogin(false)}>
              SUBMIT
            </button>
          </div>
        ) : (
          <div className={classes.body}>
            <div className={classes.heading}>OTP</div>
            <input
              className={classes.input}
              type="text"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={() => verifyOtp()} className={classes.button}>
              VERIFY
            </button>
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
