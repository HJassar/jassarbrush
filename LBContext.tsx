import React, { useState, createContext } from "react";

type LBContextType = {
  isLBOpen: boolean;
  setIsLBOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LBContext = createContext<LBContextType>({
  isLBOpen: false,
  setIsLBOpen: () => {},
});

export const LBProvider = ({ children }: { children: any }) => {
  const [isLBOpen, setIsLBOpen] = useState(false);
  return (
    <LBContext.Provider value={{ isLBOpen, setIsLBOpen }}>
      {children}
    </LBContext.Provider>
  );
};
