import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        fontSize: "20px",
        fontWeight: "bold",
        justifyContent: "center",
        margin: "30px",
        alignItems: "center",
      }}
    >
      <AiOutlineArrowLeft
        style={{ marginRight: "20px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      Order Confirmed
    </div>
  );
};

export default Payment;
