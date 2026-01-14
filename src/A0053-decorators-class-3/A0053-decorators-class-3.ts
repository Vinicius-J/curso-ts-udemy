function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi ', target);

    return class extends target {
      name: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
  public name;
  public cor;

  constructor(name: string, cor: string) {
    this.name = name;
    this.cor = cor;
    console.log('Sou a classe');
  }
}

// const animal = new Animal('Vinícius', 'roxo');
// console.log(animal);
