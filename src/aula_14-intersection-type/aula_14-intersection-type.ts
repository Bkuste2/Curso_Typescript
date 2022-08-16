type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = (TemNome & TemSobrenome) | TemIdade;

const pessoa: Pessoa = {
  nome: 'Igor',
  sobrenome: 'Ribeiro',
  idade: 17,
};

console.log(pessoa);

export { pessoa };
