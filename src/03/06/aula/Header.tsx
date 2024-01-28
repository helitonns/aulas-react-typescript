import React from "react";
import { useUi } from "./UIContext";

const Header = () => {
  const {dark, setDark} = useUi();

  return (
  <div>
    <h1>{dark ? "DARK" : "LIGHT"}</h1>
    <button onClick={()=> setDark((n) => !n)}>Setar tema {!dark ? "DARK" : "LIGHT"}</button>
  </div>
  );
};

export default Header;
