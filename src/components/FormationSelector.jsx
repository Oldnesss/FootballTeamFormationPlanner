import React from "react";

const FormationSelector = ({ formations, onFormationSelect }) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <select
        onChange={(e) => onFormationSelect(e.target.value)}
        className="p-2 rounded border border-gray-300"
      >
        {formations.map((formation) => (
          <option key={formation.name} value={formation.name}>
            {formation.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormationSelector;
