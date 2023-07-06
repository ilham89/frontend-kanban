export const generateRandomNumber = () => {
  const randomDecimal = Math.random();

  const randomNumber = Math.floor(randomDecimal * 4) + 1;

  return randomNumber;
};
