//* Recomendado
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
// Obs.: Nesse modelo eu estou garantindo que o elemento existe
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLELement
// Obs.: Nesse modelo eu estou garantindo que o elemento existe
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

//! Não Recomendado
// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body4 = document.querySelector('body') as unknown as number;
