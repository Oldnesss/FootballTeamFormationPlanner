import React from "react";
import FieldPosition from "./FieldPosition";

const FootballField = ({
  positions,
  onPositionDrop,
  fieldPlayers,
  onRemovePlayer,
  onSwapPlayers,
  className = ''
}) => {
  return (
    <div className={`relative w-full bg-green-600 overflow-hidden ${className}`}>
      {/* Внешняя граница поля */}
      <div className="absolute inset-4 border-4 border-white">
        {/* Центральная линия */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white" />

        {/* Центральный круг */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-40 h-40 border-4 border-white rounded-full"
        />

        {/* Центральная точка */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-3 h-3 bg-white rounded-full"
        />

        {/* Верхняя штрафная площадь */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1/5 border-4 border-white">
          <div className="absolute top-0 left-1/4 right-1/4 h-2/5 border-4 border-white" />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                      w-3 h-3 bg-white rounded-full"
          />
        </div>

        {/* Нижняя штрафная площадь */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-1/5 border-4 border-white">
          <div className="absolute bottom-0 left-1/4 right-1/4 h-2/5 border-4 border-white" />
          <div
            className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-3 h-3 bg-white rounded-full"
          />
        </div>
      </div>

      {/* Позиции игроков */}
      {positions.map((position) => (
        <FieldPosition
          key={`${position.x}-${position.y}`}
          position={position}
          onDrop={onPositionDrop}
          onRemovePlayer={onRemovePlayer}
          onSwapPlayers={onSwapPlayers}
          player={fieldPlayers.find(
            (p) => p.position.x === position.x && p.position.y === position.y
          )}
        />
      ))}
    </div>
  );
};

export default FootballField;
