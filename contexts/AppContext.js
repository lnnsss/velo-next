import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <AppContext.Provider
      value={{ currentTheme, setCurrentTheme, activeFilter, setActiveFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};
