import React, { useState, createContext } from "react";

// Types
type LoadingProviderProps = {
  children: React.ReactNode;
};

type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create Context
export const LoadingContext = createContext({} as LoadingContextType);

// Create Provider
const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
