import React from "react";
import profilePic from "../../public/images/profileImage.jpg";
import Image from "next/image";
import style from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero} id="hero">
      <div className={style.profile}>
        <Image
          src={profilePic}
          alt="profile image"
          className={style.profilePic}
        />
        <h1 className="text-3xl">
          Hello, I&apos;m{" "}
          <span className={style.highlightText}>James Storr</span>
        </h1>
        <h2 className="text-2xl">a Software Engineering Manager</h2>
      </div>
    </div>
  );
};

export default Hero;
