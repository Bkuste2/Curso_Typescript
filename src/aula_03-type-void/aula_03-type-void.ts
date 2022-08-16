const semRetorno = (...args: string[]): void => {
  console.log(args.join(' '));
};

type pessoaType = {
  nome: string;
  sobrenome: string;
  exibirNome: () => void;
};

const pessoa: pessoaType = {
  nome: 'Igor',
  sobrenome: 'Ribeiro',

  exibirNome() {
    console.log(this.nome);
  },
};

semRetorno('Igor', 'Ribeiro');
pessoa.exibirNome();

export { pessoa };
