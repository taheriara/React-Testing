import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  console.log("Render App");
  const [theme, setTheme] = useState("green");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter (class component)
      <Counter initialCount={0} />
      Counter Hooks (function component)
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((preTheme) => (preTheme === "red" ? "blue" : "red"))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
