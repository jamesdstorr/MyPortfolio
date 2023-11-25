"use client";
import React, { createContext, useState, useMemo, ReactNode } from "react";
import workExperienceData from '../data/workExperience.json'
import { WorkExperience } from "../types/experience";

interface DisplayContextType {
  display: string;
  setDisplay: (newDisplay: string) => void;
  workExperiences: WorkExperience[];
}

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

interface DisplayProviderProps {
  children: ReactNode;
}

const DisplayProvider: React.FC<DisplayProviderProps> = ({ children }) => {
  const [display, setDisplay] = useState<string>("About Me");

  const updateDisplay = (e: string) => {
    setDisplay(e);
  }

  const contextValue = useMemo(() => {
    return {
      display,
      setDisplay: updateDisplay,
      workExperiences: workExperienceData
    };
  }, [display]);

  return (
    <DisplayContext.Provider value={contextValue}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayProvider, DisplayContext };
