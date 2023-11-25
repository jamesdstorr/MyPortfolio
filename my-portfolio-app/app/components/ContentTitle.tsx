"use client";
import React, { useContext } from "react";
import { DisplayContext } from "../utility/displayContext";
import style from "../../styles/Content.module.css"

const ContentTitle = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("Content must be used within a DisplayProvider");
  }
  const { display } = context;

  return (
    <div className={style.contentTitleInner}>
       <h1 className="text-3xl">{display}</h1>
    </div>
  );
};

export default ContentTitle;
