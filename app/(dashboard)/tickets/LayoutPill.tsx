"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { LayoutContext } from "@/app/contexts/LayoutContextProvider";

const LayoutPill = () => {
  // const [activeLayout, setActiveLayout] = useState(tabs[0].id);

  const { tabs, activeLayout, setActiveLayout } = useContext(LayoutContext);

  return (
    <div className="ml-auto flex h-8  space-x-1 rounded-full bg-primary bg-opacity-50">
      {tabs.map((tab: any) => (
        <button
          type="button"
          className={`relative px-5`}
          key={tab.id}
          onClick={() => {
            setActiveLayout(tab.id);
          }}
        >
          {activeLayout === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 h-full bg-primary mix-blend-color-burn"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.8 }}
            />
          )}
          {tab.icon}
        </button>
      ))}
    </div>
  );
};

export default LayoutPill;
