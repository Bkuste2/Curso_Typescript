export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: /* readonly */ Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  setColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  getColaboradores() {
    return this.colaboradores;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, sobrenome: string) {}
}

const empresa01 = new Empresa('Facebroca', '11.111.111/0001-11');
empresa01.setColaborador(new Colaborador('Claudio', 'Afonso'));
empresa01.setColaborador(new Colaborador('Irineu', 'Jeferson'));
empresa01.setColaborador(new Colaborador('Maria', 'José'));

console.log(empresa01.getColaboradores());
// console.log(empresa01.nome);
