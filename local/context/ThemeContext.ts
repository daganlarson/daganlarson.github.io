

import { FC, ReactNode, createContext, useState } from "react";

export interface ThemeProps {
  toggle: () => void;
  mode: string;
}

export type ThemeContextType = {
  theme: ThemeContextProps[];
}

export const ThemeContext = createContext<ThemeContextType | null>(null);



export const ThemeProvider: FC<ReactNode> = ({ children }) => {
  const [mode, setMode] = useState<ThemeContextProps[]>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
