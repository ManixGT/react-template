import { useState } from "react";
import ThemeContext from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  console.log('ThemeProvider:Children',children);

  return (
    <ThemeContext.Provider value={ theme }>
      {children}
    </ThemeContext.Provider>
  );
};
