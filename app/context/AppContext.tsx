import React, { createContext, useContext, useState, ReactNode } from "react";

type TState = {
    isHome: boolean,
    isActivities: boolean,
    isMember: boolean,
    isBlog: boolean,
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>,
    setIsActivities: React.Dispatch<React.SetStateAction<boolean>>,
    setIsBlog: React.Dispatch<React.SetStateAction<boolean>>,
    setIsMember: React.Dispatch<React.SetStateAction<boolean>>,
    activeHomeNav: () => void,
    activeActivitiesNav: () => void,
    activeBlogNav: () => void,
    activeMemeberNav: () => void
};

const AppContext = createContext<TState | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [isHome, setIsHome] = useState<boolean>(false);
  const [isActivities, setIsActivities] = useState<boolean>(false);
  const [isMember, setIsMember] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  const activeHomeNav = () => {
    setIsHome(true);
    setIsActivities(false);
    setIsBlog(false);
    setIsMember(false);
  }
  const activeActivitiesNav = () => {
    setIsHome(false);
    setIsActivities(true);
    setIsBlog(false);
    setIsMember(false);
  }
  const activeMemeberNav = () => {
    setIsHome(false);
    setIsActivities(false);
    setIsBlog(false);
    setIsMember(true);
  }
  const activeBlogNav = () => {
    setIsHome(false);
    setIsActivities(false);
    setIsBlog(true);
    setIsMember(false);
  }

  return (
    <AppContext.Provider
      value={{
        isHome,
        isActivities,
        isMember,
        isBlog,
        setIsHome,
        setIsActivities,
        setIsBlog,
        setIsMember,
        activeHomeNav,
        activeActivitiesNav,
        activeBlogNav,
        activeMemeberNav
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
