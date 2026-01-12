export class Pessoa {
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private _cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this._cpf = cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Vinícius', 'Joaquim', 23, '000.000.000-00');
pessoa.cpf = '123.456.798-99';
console.log(pessoa.cpf);
