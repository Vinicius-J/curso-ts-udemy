export class Empresa {
  public readonly nome: string = '';
  private readonly colaboradores: Colaborador[] = [];
  /* private readonly colaboradores: readonly Colaborador[] = []; -> Caso queira que seja imutável */
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
console.log(empresa1);
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// console.log(empresa1);
empresa1.mostrarColaboradores();
