// Desafio 11 - Crie a função generatePhoneNumber
const requisito1 = (n) => {
  let tel = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;

  if (n.length !== 11) {
    tel = 'Array com tamanho incorreto.';
    return tel;
  }
  for (let number of n) {
    if (number < 0 || number > 9) {
      tel = 'não é possível gerar um número de telefone com esses valores';
      return tel;
    }
  }
};

const contRepeats = (n) => {
  let repeat = null;
  for (let i = 0; i < n.length; i += 1) {
    repeat = n.filter((x) => x === n[i]).length; // https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%C3%AAncias-de-um-valor-dentro-de-um-array
    if (repeat >= 3) {
      return repeat;
    }
  }
  return repeat;
};

const requisito2 = (n) => {
  let tel = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  let repeats = contRepeats(n);
  if (repeats >= 3) {
    tel = 'não é possível gerar um número de telefone com esses valores';
    return tel;
  }
  repeats = 0;
  return tel;
};

const generatePhoneNumber = (n) => {
  let tel = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  let requisitos1 = requisito1(n);
  let requisitos2 = requisito2(n);
  if (requisitos1) {
    return requisitos1;
  } if (requisitos2) {
    return requisitos2;
  }
  return tel;
};
// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
};
// Desafio 13 - Crie a função hydrate
const hydrate = (order) => {
  const reg = /\d+/g; // https://youtu.be/pfkkdzeyx6U, achar um ou mais digitos, "g" porque quero achar todos
  const result = order.match(reg);
  let convertNumbers = null;
  let converted = null;

  for (let i = 0; i < result.length; i += 1) {
    convertNumbers = Number(result[i]);
    converted += convertNumbers;
  }

  if (converted === 1) {
    return `${converted} copo de água`;
  } if (converted > 1) {
    return `${converted} copos de água`;
  }
};
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
