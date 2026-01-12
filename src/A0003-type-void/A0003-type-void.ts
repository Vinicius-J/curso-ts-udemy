function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vinícius',
  sobrenome: 'Joaquim',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vinícius', 'Joaquim');
pessoa.exibirNome();

export { pessoa };
