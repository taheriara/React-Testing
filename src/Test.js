import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Test() {
  const style = useContext(ThemeContext);
  return <div style={style}>Hello hta</div>;
}
