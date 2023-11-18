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
    setDisplay(e);
  };

  return (
    <div className={style.sidebar}>
      <ul className={style.nav}>
        <li className={style.navLink}>
          <button  onClick={() => handleNavClick("aboutMe")}>About me</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("experience")}>Experience</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("experience")}>Projects</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("blog")}>Blog</button>
        </li>
      </ul>
      
    </div>
  );
};

export default Nav;
