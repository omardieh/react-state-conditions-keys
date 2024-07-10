import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className={"App " + theme}>
      <button onClick={increment}> increment </button>
      <span> {count} </span>
      <button onClick={decrement}> decrement </button>
      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
      <button onClick={toggleTheme}>
        switch to {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
}
