import React, { createContext } from "react";

export const MobileViewContext = createContext();

const CursorProvider = ({ children }) => {
  const mobileViewportIsActive = window.innerWidth < 768;
  const tabletViewportIsActive = window.innerWidth < 1025;

  return (
    <MobileViewContext.Provider
      value={{ mobileViewportIsActive, tabletViewportIsActive }}
    >
      {children}
    </MobileViewContext.Provider>
  );
};

export default CursorProvider;
