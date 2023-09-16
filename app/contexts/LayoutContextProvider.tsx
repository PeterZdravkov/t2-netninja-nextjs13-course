"use client";
import React, { createContext, useState, useEffect } from "react";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";

export const LayoutContext = createContext<any>(null);

const LayoutContextProvider = ({ children, userSettings }: any) => {
  const [activeLayout, setActiveLayout] = useState(tabs[0].id);

  useEffect(() => {
    setActiveLayout(userSettings.layout);
  }, [userSettings.layout]);

  return (
    <LayoutContext.Provider value={{ tabs, activeLayout, setActiveLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

interface tabs {
  id: string;
  icon: React.ReactElement<any, any>;
}

let tabs: tabs[] = [
  {
    id: "horizontal",
    icon: (
      <TbLayoutList
        size={24}
        className="duration-2500 text-white transition ease-in-out hover:text-slate-200"
      />
    ),
  },
  {
    id: "grid",
    icon: (
      <TbLayoutGrid
        size={24}
        className="duration-2500 text-white transition ease-in-out hover:text-slate-200"
      />
    ),
  },
];

export default LayoutContextProvider;
