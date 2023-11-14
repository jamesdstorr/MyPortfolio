"use client";
import React, { useContext, useEffect } from "react";
import style from "../../styles/Nav.module.css";
import { DisplayContext } from "../utility/displayContext";

const Nav = () => {
   const displayContext = useContext(DisplayContext);

  if (!displayContext) {
    console.error("DisplayContext not found");
    return null;
  }

  const { setDisplay } = displayContext; 

  

  const handleNavClick = (e: string) => {
    console.log("Clicked:", e);
    setDisplay(e);
  };

  return (
    <div className={style.sidebar}>
      <ul className={style.nav}>
        <li>
          <button onClick={() => handleNavClick("aboutMe")}>About Me</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("experience")}>
            Experience
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
