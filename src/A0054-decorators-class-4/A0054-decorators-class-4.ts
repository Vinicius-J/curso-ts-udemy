type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor) {
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

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o segundo decorador ' + param1);
    return target;
  };
}

@outroDecorador('O parâmetro do outro decorador')
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
