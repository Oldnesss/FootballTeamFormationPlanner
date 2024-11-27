export const getPositionColor = (label) => {
  switch (label) {
    case "Keeper":
      return "bg-gray-500";
    case "Centre Back":
    case "Full Back":
      return "bg-blue-500";
    case "Centre Midfield":
      return "bg-yellow-500";
    case "Centre Forward":
    case "Left Winger":
    case "Right Winger":
      return "bg-red-500";
    default:
      return "bg-white/50";
  }
};
