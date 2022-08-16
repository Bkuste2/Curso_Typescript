enum Cores {
  VERMELHO,
  AZUL,
  AMARELO = 100,
  PRETO = 200,
  ROSA,
  FUSAO = 99,
}

const escolhaACor = (cor: Cores): void => {
  console.log(Cores[cor]);
};

escolhaACor(Cores.VERMELHO);
