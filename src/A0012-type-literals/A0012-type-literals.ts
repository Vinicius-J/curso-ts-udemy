let x = 10;
x = 0b1010;

const y = 10;

const a: 100 = 100 as const;

const pessoa = {
  nome: 'Vinícius' as const, // impede de alterar o valor
  sobrenome: 'Joaquim',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));
