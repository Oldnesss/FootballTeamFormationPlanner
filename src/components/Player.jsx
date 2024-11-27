import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../types/types";
import { ArrowUpRight } from "lucide-react"; 

const Player = ({
  id,
  number,
  name,
  surname,
  image,
  className = "",
  onClick,
  onInfoClick,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PLAYER,
    item: { id, number, name, surname, image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleInfoClick = (e) => {
    e.stopPropagation(); 
    if (onInfoClick) {
      onInfoClick({ id, number, name, surname, image });
    }
  };

  return (
    <div
      ref={drag}
      onClick={onClick}
      className={`
        flex items-center 
        p-2 sm:p-3 
        mb-1 sm:mb-2 
        bg-white 
        rounded-lg 
        shadow 
        relative 
        ${onClick ? "cursor-pointer" : "cursor-move"}
        ${isDragging ? "opacity-50" : "opacity-100"}
        ${className}
      `}
    >
      <img
        src={image || "/api/placeholder/32/32"}
        alt={`${name} ${surname}`}
        className="
          w-8 h-8 
          sm:w-10 sm:h-10 
          md:w-9 md:h-9 
          lg:w-10 lg:h-10 
          rounded-full 
          mr-2 sm:mr-3
        "
      />
      <div className="text-xs sm:text-sm md:text-xs lg:text-sm flex-1">
        <div className="font-bold">#{number}</div>
        <div className="hidden sm:block">
          {name} {surname}
        </div>
        <div className="sm:hidden">{surname}</div>
      </div>

      {/* Иконка информации/добавления */}
      <button
        onClick={handleInfoClick}
        className="
          absolute 
          top-1 
          right-1 
          p-1 
          rounded-full 
          hover:bg-gray-100
          transition-colors
        "
      >
        <ArrowUpRight size={16} className="text-blue-500" />
      </button>
    </div>
  );
};

export default Player;
