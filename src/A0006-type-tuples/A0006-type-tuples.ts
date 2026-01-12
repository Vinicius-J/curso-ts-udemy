// Tuple é um array com tipos especificos
const dadosClientes1: readonly [number, string] = [1, 'Vinícius'];
const dadosClientes2: [number, string, string] = [1, 'Vinícius', 'Joaquim'];
const dadosClientes3: [number, string, string?] = [1, 'Vinícius'];
const dadosClientes4: [number, string, ...string[]] = [
  1,
  'Vinícius',
  'Joaquim',
  'a',
  'b',
  'c',
];

// dadosClientes1[0] = 100;
// dadosClientes1[1] = 'Joaquim';
console.log(dadosClientes1);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);
