"use client";
import React, { useContext, useRef } from "react";
import { DisplayContext } from "../utility/displayContext";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import style from "../../styles/Content.module.css";
import VerticalScrollIndicator from "./VerticalScrollIndicator";

const Content = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("Content must be used within a DisplayProvider");
  }
  const { display, workExperiences } = context;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-row">
      <div className={style.content} ref={scrollContainerRef}>
        {display === "aboutMe" && <AboutMe />}
        {display === "experience" && (
          <Experience workexperiences={workExperiences} />
        )}
      </div>
      <div className={style.scrollIndicator}>
        <VerticalScrollIndicator targetRef={scrollContainerRef} />
      </div>
    </div>
  );
};

export default Content;
