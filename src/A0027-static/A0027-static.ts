export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = 0;

  public nome: string;
  public sobrenome: string;
  public idade: number;
  public cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa = new Pessoa('Vinícius', 'Joaquim', 23, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Eduarda');
console.log(pessoa);
console.log(pessoa2);
pessoa.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
