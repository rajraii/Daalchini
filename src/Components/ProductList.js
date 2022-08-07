import React from "react";
import { useStateValue } from "./Context/StateProvider";
import Product from "./Product";

const ProductList = () => {
  const [state] = useStateValue();
  return (
    <>
      <div
        style={{
          margin: "0px 10vw",
        }}
      >
        {state.map((item, key) => (
          <div className="line">
            <Product data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
