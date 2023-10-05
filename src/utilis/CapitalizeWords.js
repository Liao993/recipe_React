const CapitalizeWords = (input) => {
  const lowerInput = input.toLowerCase();
  return lowerInput
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default CapitalizeWords;
