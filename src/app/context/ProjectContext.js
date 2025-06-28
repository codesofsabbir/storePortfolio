'use client';
import React, { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  // ⚠️ You must return this JSX
  return (
    <ProjectContext.Provider value={{ selected, setSelected }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
