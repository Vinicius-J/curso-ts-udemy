/*
Para representar public no UML se usa o sinal de +
Para representar private no UML se usa o sinal de -
Para representar protected no UML se usa o sinal de #
*/

export class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do aluno ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Vinícius', 'Joaquim', 23, '000.000.000-00');
const aluno = new Aluno('Vinícius', 'Joaquim', 23, '000.000.000-00');
const cliente = new Cliente('Vinícius', 'Joaquim', 23, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
