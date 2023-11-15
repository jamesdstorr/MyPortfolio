"use client"
import React, { useContext } from 'react';
import { DisplayContext } from '../utility/displayContext';
import AboutMe from './AboutMe';
import Experience from './Experience';

const Content = () => {
    const context = useContext(DisplayContext);


    if (!context) {
        throw new Error('Content must be used within a DisplayProvider');
      }

    const {display, workExperiences} = context;

    return (
        <>
         {display === 'aboutMe' && <AboutMe />}
         {display === 'experience' && <Experience workexperiences={workExperiences} />}
            
        </>
    );
};

export default Content;
