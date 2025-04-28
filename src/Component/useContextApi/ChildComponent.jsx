import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export function ChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <p>Current Theme: {theme}</p>
    </div>
  );
};
