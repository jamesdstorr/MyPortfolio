import React from "react";
import profilePic from "../../public/images/profile2.png";
import Image from "next/image";
import style from "../../styles/Hero.module.css";
import Content from "./Content";

const Hero = () => {
  const intro: string = `Hello, I'm James Storr`;

  return (
  
      <div className={style.hero} id="hero">
        <div className={style.profile}>
         
          <div className="text-center pb-5">
            <h1 className="text-2xl">{intro}</h1>
            <h2 className="text-1xl">a Software Engineering Manager</h2>
          </div>
          <Image
            src={profilePic}
            alt="profile image"
            className={style.profilePic}
            priority
          />
        </div>
        <div className={style.mainContent}>
          <Content/> 
        </div>
      </div>
  
  );
};

export default Hero;
