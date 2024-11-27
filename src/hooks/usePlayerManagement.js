import { useState, useCallback } from "react";

export const usePlayerManagement = (initialPlayers, positions) => {
  const [availablePlayers, setAvailablePlayers] = useState(initialPlayers);
  const [fieldPlayers, setFieldPlayers] = useState([]);

  const addPlayerToField = useCallback(
    (position, player) => {
      const isPositionOccupied = fieldPlayers.some(
        (p) => p.position.x === position.x && p.position.y === position.y
      );

      if (isPositionOccupied) return;

      setAvailablePlayers((prev) => prev.filter((p) => p.id !== player.id));
      setFieldPlayers((prev) => [...prev, { ...player, position }]);
    },
    [fieldPlayers]
  );

  const removePlayerFromField = useCallback(
    (playerId) => {
      const player = fieldPlayers.find((p) => p.id === playerId);
      if (player) {
        setFieldPlayers((prev) => prev.filter((p) => p.id !== playerId));
        setAvailablePlayers((prev) => [
          ...prev,
          { ...player, position: undefined },
        ]);
      }
    },
    [fieldPlayers]
  );

  const swapPlayers = useCallback(
    (fromPosition, toPosition) => {
      setFieldPlayers((prev) => {
        const fromPlayer = prev.find(
          (p) =>
            p.position.x === fromPosition.x && p.position.y === fromPosition.y
        );
        const toPlayer = prev.find(
          (p) => p.position.x === toPosition.x && p.position.y === toPosition.y
        );

        if (!fromPlayer) return prev;

        const otherPlayers = prev.filter(
          (p) =>
            (p.position.x !== fromPosition.x ||
              p.position.y !== fromPosition.y) &&
            (p.position.x !== toPosition.x || p.position.y !== toPosition.y)
        );

        if (toPlayer) {
          return [
            ...otherPlayers,
            { ...fromPlayer, position: toPosition },
            { ...toPlayer, position: fromPosition },
          ];
        }

        return [...otherPlayers, { ...fromPlayer, position: toPosition }];
      });
    },
    []
  );

  return {
    availablePlayers,
    fieldPlayers,
    addPlayerToField,
    removePlayerFromField,
    swapPlayers,
  };
};
