"use client";
import React, { createContext, useState, useMemo, ReactNode } from "react";

interface DisplayContextType {
  display: string;
  setDisplay: (newDisplay: string) => void;
}

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

interface DisplayProviderProps {
  children: ReactNode;
}

const DisplayProvider: React.FC<DisplayProviderProps> = ({ children }) => {
  const [display, setDisplay] = useState<string>("experience");

  const updateDisplay = (e: string) => {
    setDisplay(e);
    console.log(display);
  }

  const contextValue = useMemo(() => {
    return {
      display,
      setDisplay: updateDisplay,
    };
  }, [display]);

  return (
    <DisplayContext.Provider value={contextValue}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayProvider, DisplayContext };
