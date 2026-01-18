// interface PessoaProtocolo<T, U> {
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo2<string, number> = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  idade: 23,
};
console.log(aluno1);

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 123,
  idade: 23,
};
console.log(aluno2);

const aluno3: PessoaProtocolo = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',
  idade: 23,
};
console.log(aluno3);
