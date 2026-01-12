// Array<T> - T[]
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaStrings(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor, '');
}

function toUpperCase(...args: Array<string>): string[] {
  return args.map((valor) => valor.toUpperCase());
}

// duas formas de criar um array de readonly
const array1: ReadonlyArray<string> = ['Vinícius', 'Joaquim'];
const array2: readonly string[] = ['Vinícius', 'Joaquim'];

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
