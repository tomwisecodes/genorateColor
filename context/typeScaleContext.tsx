import React, { useState, createContext } from "react";

export const TypeScaleContext = React.createContext(null);

type Props = {
  children: React.ReactNode;
};

export const TypeScaleContextProvider = ({ children }: Props) => {
  const [typeScale, setTypeScale] = useState(1.067);
  return (
    <TypeScaleContext.Provider value={{ typeScale, setTypeScale }}>
      {children}
    </TypeScaleContext.Provider>
  );
};
