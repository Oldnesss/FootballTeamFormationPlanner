import React from "react";
import { Menu, X } from "lucide-react";

const MobileNavigation = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden absolute top-4 left-4 z-50 bg-blue-500 p-2 rounded-full"
    >
      {isOpen ? <X color="white" /> : <Menu color="white" />}
    </button>
  );
};

export default MobileNavigation;
