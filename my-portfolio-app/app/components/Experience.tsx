import React from "react";
import { WorkExperienceProps } from "../types/experience";
import style from "../../styles/Experience.module.css"

const Experience: React.FC<WorkExperienceProps> = ({ workexperiences }) => {
  return (
    <>
      <ul>
        {workexperiences.map((experience, index) => {
          return (
            <li className={style.experienceItem} key={index}>
              <div> <p className="font-bold">{experience.title} </p> </div>
              <div className="flex flex-row whitespace-pre">
                <p className="font-bold">from: </p> {experience.from}
                <p className="font-bold whitespace-pre-wrap"> to: </p> {experience.to}
              </div>
              <div className="flex flex-row whitespace-pre">
                <p className="font-bold">summary: </p> <p className="whitespace-pre-wrap">{experience.summary}</p>
              </div>
              <div className="flex flex-row whitespace-pre">
              <p className="flex flex-row font-bold">highlights: </p>
                <ul className="whitespace-pre">
                  {experience.highlights.map((highlight, index) => {
                    return <li key={index}>{highlight}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Experience;
