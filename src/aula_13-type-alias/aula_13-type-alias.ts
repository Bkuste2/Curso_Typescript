type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Majenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Igor',
  salario: 10000,
  idade: 17,
};

export const setCorPreferida = (
  pessoa: Pessoa,
  corPreferida: CorPreferida,
): Pessoa => {
  return { ...pessoa, corPreferida };
};

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
