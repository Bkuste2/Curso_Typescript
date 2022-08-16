export const multiplicaArgs = (...args: Array<number>): number => {
  return args.reduce((ac, value) => ac * value, 1);
};

export const concatenaStrings = (...args: string[]): string => {
  return args.reduce((ac, value) => ac + value);
};

export const toUperCaseNaMarra = (...args: string[]): string[] => {
  return args.map((arg) => arg.toUpperCase());
};

const result = multiplicaArgs(3, 4, 6, 7, 8, 8);
const resultString = concatenaStrings(`Sou`, `Cheiroso`, `heheh`);
const resultToUperCaseNaMarra = toUperCaseNaMarra(
  'aaaaa',
  'ooggggg',
  'minusculo',
  'pequeno',
);

console.log(result);
console.log(resultString);
console.log(resultToUperCaseNaMarra);
