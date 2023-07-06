import { generateRandomNumber } from "./number";

export const primaryColors = ["#01959F", "#FEEABC", "#F5B1B7", "#B8DBCA"];
export const secondaryColors = ["#F7FEFF", "#FFFCF5", "#FFFAFA", "#F8FBF9"];
export const fontColors = ["#01959F", "#FA9810", "#E11428", "#43936C"];

export const generateRandomColorPair = () => {
  const randomNumber = generateRandomNumber();

  const primaryColor = primaryColors[randomNumber - 1];
  const secondaryColor = secondaryColors[randomNumber - 1];
  const fontColor = fontColors[randomNumber - 1];

  return { primaryColor, secondaryColor, fontColor };
};

export const generateHexToText = (hex: string) => {
  switch (hex) {
    case "#01959F":
      return "primary";
    case "#FEEABC":
      return "secondary";
    case "#F5B1B7":
      return "primaryDanger";
    case "#B8DBCA":
      return "primarySuccess";
    default:
      return "primary"; // Return the original code if no conversion is specified
  }
};
