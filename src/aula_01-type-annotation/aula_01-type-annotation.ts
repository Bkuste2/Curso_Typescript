/* eslint-disable */

// Tipos básicos que podem ocorrer inferencia de tipos

let nome: string = 'João';
let idade: number = 23;
let adulto: boolean = true;
let simbol: symbol = Symbol('simbolo');
let big: bigint = 10n;

// Arrays
let arrayNumerico: Array<number> = [1, 2, 3]
let arrayNumerico2: number[] = [1, 2, 3]
let arrayDeString: Array<string> = ['a', 'b', 'c']
let arrayDeString2: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'João',
    idade: 10,
}

// Funções
function soma(x: number, y: number){
    return x + y
}

export const soma2: (x: number, y: number) => number = (x,y) => x + y
