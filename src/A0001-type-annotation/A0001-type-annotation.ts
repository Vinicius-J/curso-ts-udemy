const nome: string = 'Vinícius';
const idade: number = 23;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-simbolo');
// let big: bigint = 10n;

// Duas formas de criar array de tipos
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];

const arrayDeStrings: Array<string> = ['1', '2', '3'];
const arrayDeStrings2: string[] = ['1', '2', '3'];

// Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Vinícius',
  idade: 23,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
