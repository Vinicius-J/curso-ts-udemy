function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Vinícius', 23);

funcao.apply(new Date(), ['Vinícius', 23]);

//! funcao('Vinícius');
