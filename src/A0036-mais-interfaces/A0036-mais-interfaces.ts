// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  enderecos: ['Av. Brasil'],
};

console.log(pessoa);
