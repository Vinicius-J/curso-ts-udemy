enum Cores {
  VERMELHO = 10,
  AZUL = 20,
  AMARELO = 30,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[10]);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
