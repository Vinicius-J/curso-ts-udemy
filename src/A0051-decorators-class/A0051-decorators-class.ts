@decorator
export class Animal {
  public name;
  public cor;

  constructor(cor: string, name: string) {
    this.name = name;
    this.cor = cor;
  }
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    name: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

// const AnimalDecorated = decorator(Animal);
// const animal = new AnimalDecorated('Vinícius', 'roxo');
const animal = new Animal('Vinícius', 'roxo');
console.log(animal);
