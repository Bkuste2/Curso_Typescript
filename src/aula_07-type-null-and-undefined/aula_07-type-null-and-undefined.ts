let x;
if (typeof x === 'undefined') {
  x = 20;
}

export const createPerson = (firstName: string, lastName?: string): string => {
  return `${firstName} ${lastName != undefined ? lastName : ''}`;
};

console.log(createPerson('Igor'));
console.log(createPerson('Igor', 'Ribeiro'));

export const squareOf = (x: any) => {
  if (typeof x === 'number') return x ** 2;
  return null;
};

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
