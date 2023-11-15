import React from "react";
import { WorkExperienceProps } from "../types/experience";

const Experience: React.FC<WorkExperienceProps> = ({ workexperiences }) => {
  return (
    <>
      <h1 className="text-2xl pb-2">Experience</h1>
      <ul>
        {workexperiences.map((experience, index) => {
          return (
            <li className="flex flex-col pb-2 border-b-4" key={index}>
              <div> <p className="font-bold">{experience.title} </p> </div>
              <div className="flex flex-row whitespace-pre">
                <p className="font-bold">from: </p> {experience.from}
                <p className="font-bold">to: </p> {experience.to}
              </div>
              <div className="flex flex-row whitespace-pre">
                <p className="font-bold">summary: </p> <p className="whitespace-pre-wrap">{experience.summary}</p>
              </div>
              <div className="flex flex-row whitespace-pre">
              <p className="font-bold">highlights: </p>
                <ul>
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
