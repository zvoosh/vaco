import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface MyContextType {
  index: number | undefined;
  setIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [index, setIndex] = useState<number>();
  const [value, setValue] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ value, setValue, index, setIndex }}>
      {children}
    </MyContext.Provider>
  );
};
