import React, { useState, useEffect, createContext, useContext } from "react";

// Types
type ScreenProviderProps = {
  children: React.ReactNode;
};

type ScreenContextType = {
  isSmallScreen: boolean;
  setIsSmallScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create Context
export const ScreenContext = createContext({} as ScreenContextType);

// Create Provider
const ScreenProvider = ({ children }: ScreenProviderProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  return (
    <ScreenContext.Provider value={{ isSmallScreen, setIsSmallScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;

// Context Hook
export const useScreenDetected = () => {
  const { setIsSmallScreen } = useContext(ScreenContext);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const getWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
      detectScreenSize();
    };

    const detectScreenSize = () => {
      if (windowWidth < 992) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    getWindowWidth();

    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, [setIsSmallScreen, windowWidth]);
};
