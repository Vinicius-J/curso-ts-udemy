type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  public nome: string;
  public sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Vinícius', 'Joaquim');
console.log(pessoa.nomeCompleto());
