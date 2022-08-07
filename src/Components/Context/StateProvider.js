import React, { useContext, createContext, useState } from "react";
import { data } from "../../Data/Data";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(data);
  // localStorage.setItem("isLogin", false);
  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
