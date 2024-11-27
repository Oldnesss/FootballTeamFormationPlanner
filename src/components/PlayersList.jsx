import React from "react";
import Player from "./Player";

const PlayersList = ({
  players,
  onPlayerSelect,
  positions,
  fieldPlayers,
  isMobile = false,
  className = "",
}) => {
  const findFreePosition = () => {
    // Находим первую свободную позицию
    const takenPositions = fieldPlayers.map(
      (fp) => `${fp.position.x}-${fp.position.y}`
    );

    const freePosition = positions.find(
      (pos) => !takenPositions.includes(`${pos.x}-${pos.y}`)
    );

    return freePosition || positions[0]; // Возвращаем первую позицию если все заняты
  };

  const handlePlayerSelect = (player) => {
    if (isMobile && onPlayerSelect) {
      const freePosition = findFreePosition();
      onPlayerSelect(freePosition, player);
    }
  };

  const handlePlayerInfo = (player) => {
    if (isMobile && onPlayerSelect) {
      const freePosition = findFreePosition();
      onPlayerSelect(freePosition, player);
    }
  };

  return (
    <div
      className={`
        bg-gray-100 
        p-2 sm:p-3 md:p-4 
        overflow-y-auto 
        h-auto md:h-screen 
        transition-all duration-300 
        ease-in-out
        ${className}
      `}
    >
      <h2 className="mt-10 md:mt-0 text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
        Доступные игроки
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3">
        {players.map((player) => (
          <Player
            key={player.id}
            {...player}
            onClick={isMobile ? () => handlePlayerSelect(player) : undefined}
            onInfoClick={isMobile ? () => handlePlayerInfo(player) : undefined}
            className={`
              transform transition-transform duration-300 
              hover:scale-105 
              md:scale-90 
              lg:scale-95 
              xl:scale-100
              ${isMobile ? "cursor-pointer" : ""}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
