// Tuple
const dadosCliente01: readonly [number, string] = [1, 'Igor'];
const dadosCliente02: [number, string, string?] = [2, 'Igor'];
const dadosCliente03: [number, string, ...string[]] = [3, 'Igor'];

dadosCliente03[4] = 'OI';
console.log(dadosCliente01);
console.log(dadosCliente02);
console.log(dadosCliente03);

// readonly
const array01: readonly string[] = ['Claudio', 'Irineu'];
const array02: ReadonlyArray<string> = ['Somente Leitura!'];

console.log(array01);
console.log(array02);
