type Params = (pessoa: Pessoa) => string;

type Pessoa = {
  nome: string;
  sobrenome: string;
};

const testandoParametrosEmArrowFunctions: Params = (pessoa): string => {
  return `${pessoa.nome} ${pessoa.sobrenome}`;
};

const resposta: Pessoa = {
  nome: 'Igor',
  sobrenome: 'Ribeiro',
};
const resultado = testandoParametrosEmArrowFunctions(resposta);
console.log(resultado);

export { testandoParametrosEmArrowFunctions };
