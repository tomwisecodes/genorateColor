import React, { useState, createContext } from "react";
import { Dispatch, SetStateAction } from "react";

type providerValue = {
  typeScale: string;
  setTypeScale: Dispatch<SetStateAction<string>>;
};
const intialState = {} as providerValue;

export const TypeScaleContext = React.createContext(intialState);

type Props = {
  children: React.ReactNode;
};

export const TypeScaleContextProvider = ({ children }: Props) => {
  const [typeScale, setTypeScale] = useState("1.067");
  return (
    <TypeScaleContext.Provider value={{ typeScale, setTypeScale }}>
      {children}
    </TypeScaleContext.Provider>
  );
};
