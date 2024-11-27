import { useState, useCallback } from "react";
import { FORMATIONS } from "../data/formations";

export const useFormation = () => {
  const [currentFormation, setCurrentFormation] = useState("4-3-3");
  const [positions, setPositions] = useState(FORMATIONS["4-3-3"]);

  const changeFormation = useCallback((formationName) => {
    if (FORMATIONS[formationName]) {
      setCurrentFormation(formationName);
      setPositions(FORMATIONS[formationName]);
    }
  }, []);

  return {
    positions,
    currentFormation,
    changeFormation,
    formations: Object.keys(FORMATIONS),
  };
};
