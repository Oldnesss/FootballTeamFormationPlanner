import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PlayersList from "./components/PlayersList";
import FootballField from "./components/FootballField";
import FormationSelector from "./components/FormationSelector";
import MobileNavigation from "./components/MobileNavigation";
import { useFormation } from "./hooks/useFormation";
import { usePlayerManagement } from "./hooks/usePlayerManagement";
import { mockPlayers } from "./data/players";

const App = () => {
  const { positions, formations, changeFormation } = useFormation();
  const {
    availablePlayers,
    fieldPlayers,
    addPlayerToField,
    removePlayerFromField,
    swapPlayers,
  } = usePlayerManagement(mockPlayers, positions);

  const [isMobilePlayersOpen, setIsMobilePlayersOpen] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden relative">
        <MobileNavigation
          isOpen={isMobilePlayersOpen}
          onToggle={() => setIsMobilePlayersOpen(!isMobilePlayersOpen)}
        />

        <div
          className={`
            ${
              isMobilePlayersOpen
                ? "block absolute top-0 left-0 w-full h-full z-40"
                : "hidden"
            }
            md:block md:w-1/4 md:max-w-xs 
            bg-white md:bg-gray-100 
            transition-all duration-300 ease-in-out
          `}
        >
          <PlayersList
            players={availablePlayers}
            onPlayerSelect={addPlayerToField}
            positions={positions}
            fieldPlayers={fieldPlayers}
            isMobile={true}
            className="h-full"
          />
        </div>

        <div className="relative flex-1 w-full overflow-auto">
          <div className="w-full max-w-[800px] mx-auto px-4 relative">
            <FormationSelector
              formations={formations.map((name) => ({ name }))}
              onFormationSelect={changeFormation}
              className="absolute top-2 right-2 z-10"
            />
            <FootballField
              positions={positions}
              onPositionDrop={addPlayerToField}
              fieldPlayers={fieldPlayers}
              onRemovePlayer={removePlayerFromField}
              onSwapPlayers={swapPlayers}
              className="w-full aspect-[7/10] max-h-[calc(100vh-40px)]"
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
