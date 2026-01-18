/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Vinícius';

  export class PessoaDoNamespace {
    public nome;
    constructor(nome: string) {
      this.nome = nome;
    }
  }

  const pessoa = new PessoaDoNamespace('Vinícius');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Joaquim';
  }
}

const pessoa = new MeuNamespace.PessoaDoNamespace('Vinícius');
console.log(pessoa);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
