import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(false);

  return (
    <AppContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </AppContext.Provider>
  );
};
