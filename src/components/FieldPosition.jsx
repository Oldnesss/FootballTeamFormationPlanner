import React from "react";
import { useDrop, useDrag } from "react-dnd";
import { ItemTypes } from "../types/types";
import { getPositionColor } from "../utils/getPositionColor";

const FieldPosition = ({
  position,
  onDrop,
  player,
  onRemovePlayer,
  onSwapPlayers,
}) => {
  // Настраиваем drag для игрока на поле
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FIELD_PLAYER,
    item: {
      type: ItemTypes.FIELD_PLAYER,
      id: player?.id,
      position,
      player,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: Boolean(player),
  });

  // Настраиваем drop для позиции
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [ItemTypes.PLAYER, ItemTypes.FIELD_PLAYER],
    canDrop: (item) => {
      // Если это игрок с поля
      if (item.type === ItemTypes.FIELD_PLAYER) {
        // Нельзя бросить на ту же позицию
        if (item.position.x === position.x && item.position.y === position.y) {
          return false;
        }
        return true;
      }
      // Если это новый игрок из списка, можно бросить только на пустую позицию
      return !player;
    },
    drop: (item) => {
      if (item.type === ItemTypes.FIELD_PLAYER) {
        onSwapPlayers(item.position, position);
      } else {
        onDrop(position, item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // Объединяем рефы
  const ref = (node) => {
    drag(drop(node));
  };

  const handleDoubleClick = () => {
    if (player) {
      onRemovePlayer(player.id);
    }
  };

  // Определяем цвет фона
  const getBackgroundColor = () => {
    if (isOver) {
      return canDrop ? "bg-green-600" : "bg-red-600";
    }
    if (player) {
      return getPositionColor(position.label);
    }
    return "bg-white/50";
  };

  return (
    <div
      ref={ref}
      onDoubleClick={player ? handleDoubleClick : undefined}
      title={player ? "Двойной клик удалит игрока" : undefined}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        cursor: player ? "pointer" : "default",
        touchAction: "none",
      }}
      className={`absolute w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 
        -ml-5 sm:-ml-6 md:-ml-7 lg:-ml-8 
        -mt-5 sm:-mt-6 md:-mt-7 lg:-mt-8  rounded-full 
        flex flex-col items-center justify-center 
        transition-all duration-200 ease-in-out
        hover:scale-110
        ${getBackgroundColor()}
        ${
          player
            ? "border-2 border-blue-500" 
            : "border-2 border-dashed border-gray-400"
        }
        ${isDragging ? "opacity-50" : "opacity-100"}
      `}
    >
      {player && (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <img
            src={player.image || "/api/placeholder/32/32"}
            alt={`${player.name} ${player.surname}`}
            className="w-8 h-8 rounded-full mb-1"
          />
          <div className="text-[10px] sm:text-xs font-bold text-white">#{player.number}</div>
          <div className="text-[8px] sm:text-xs text-white hidden sm:block">{player.surname}</div>
        </div>
      )}
      {!player && <div className="text-[10px] sm:text-xs text-gray-600">{position.label}</div>}
    </div>
  );
};

export default FieldPosition;
