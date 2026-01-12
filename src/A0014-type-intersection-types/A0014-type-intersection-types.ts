type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// type Pessoa = TemNome | TemSobrenome | TemIdade;
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  idade: 23,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type Intersecao = AB & AC & AD;
