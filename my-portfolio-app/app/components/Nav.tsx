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
          <button  onClick={() => handleNavClick("About Me")}>About me</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("Experience")}>Experience</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("Testimonials")}>Testimonials</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("Projects")}>Projects</button>
        </li>
        <li className={style.navLink}>
          <button onClick={() => handleNavClick("Blog")}>Blog</button>
        </li>
      </ul>
      
    </div>
  );
};

export default Nav;
