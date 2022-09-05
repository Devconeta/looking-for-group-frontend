import React from "react";
import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [chain, setChain] = useState({});

  return (
    <GeneralContext.Provider value={{ chain, setChain }}>
      {children}
    </GeneralContext.Provider>
  );
};
