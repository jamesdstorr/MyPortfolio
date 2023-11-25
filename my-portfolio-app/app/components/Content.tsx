"use client";
import React, { useContext, useRef } from "react";
import { DisplayContext } from "../utility/displayContext";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import style from "../../styles/Content.module.css";
import VerticalScrollIndicator from "./VerticalScrollIndicator";

import BlogList from "./BlogList";

import { ApolloProvider } from "@apollo/client";
import client from "../data/graphql/apolloClient";

const Content = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("Content must be used within a DisplayProvider");
  }
  const { display, workExperiences } = context;
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  
  return (
    <ApolloProvider client={client}>
    <div className="flex flex-row">
      <div className={style.content} ref={scrollContainerRef}>
        {display === "About Me" && <AboutMe />}
        {display === "Experience" && (
          <Experience workexperiences={workExperiences} />
        )}
        {display === "Blog" && (
          <BlogList/>
        )}
      </div>
      <div className={style.scrollIndicator}>
        <VerticalScrollIndicator targetRef={scrollContainerRef} />
      </div>
    </div>
    </ApolloProvider>
  );
};

export default Content;
