/*
public -> acessível dentro da classe e fora da classe
Obs.: quando não se coloca nada o item é automaticamente public

private -> acessível somente dentro da classe (encapsulamento)
*/
export class Empresa {
  public readonly nome: string = 'Vinícius';
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  public readonly nome: string;
  public readonly sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Vinícius', 'Joaquim');
const colaborador2 = new Colaborador('Roberto', 'Carlos');
const colaborador3 = new Colaborador('José', 'Maria');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1.getNome(), empresa1.nome);
