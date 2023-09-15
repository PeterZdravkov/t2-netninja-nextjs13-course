"use client";
import React, { createContext, useState } from "react";
import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";

export const LayoutContext = createContext<any>(null);

const LayoutContextProvider = ({ children }: any) => {
  const [activeLayout, setActiveLayout] = useState(tabs[0].id);

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
        className="duration-2500 text-white transition ease-in-out hover:text-primary"
      />
    ),
  },
  {
    id: "grid",
    icon: (
      <TbLayoutGrid
        size={24}
        className="duration-2500 text-white transition ease-in-out hover:text-primary"
      />
    ),
  },
];

export default LayoutContextProvider;
