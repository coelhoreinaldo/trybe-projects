// Desafio 1 - Crie a função compareTrue

// const compareTrue = (param1, param2) => param1 === true && param2 === true;

const compareTrue = (param1, param2) => (!!(param1 && param2));

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (object) => `${object[object.length - 1]}, ${object[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (numbers) => {
  const keepMaxNumber = Math.max(...numbers);
  let repeats = null;
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] === keepMaxNumber) {
      repeats += 1;
    }
  }
  return repeats;
};

// função sem usar Math.max
// const returnBase = (numbers) => {
//   let base = numbers[0];
//   for (let number in numbers) {
//       if (numbers[number] > base) {
//           base = numbers[number];
//       }
//   }
//   return base;
// }

// const highestCount = (numbers) => {
//   let base = returnBase(numbers);
//   let repeats = null;
//   for (let cont in numbers) {
//       if (numbers[cont] === base) {
//           repeats += 1
//       }
//   }
//   return repeats
// }

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => (base * height);
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const c1 = Math.abs(cat1 - mouse);
  const c2 = Math.abs(cat2 - mouse);

  if ((c1) < (c2)) {
    return ('cat1');
  } if ((c2) < (c1)) {
    return ('cat2');
  } if ((c1) === (c2)) {
    return ('os gatos trombam e o rato foge');
  }
};
// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (numbers) => {
  let result = numbers.map((e) => {
    if (e % 15 === 0) {
      return 'fizzBuzz';
    } if (e % 3 === 0) {
      return 'fizz';
    } if (e % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
  return result;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (phrase) => { // https://dev.to/lukyhenson/substitua-sua-instrucao-switch-e-varios-if-and-else-usando-object-literals-pt-br-4po9 usei object literals para diminuir a complexidade que o switch/case e o if/else causa
  let join = '';

  encodeBase = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  phrase.split('').forEach((lett) => { join += encodeBase[lett] ? encodeBase[lett] : lett; });
  return join;
};

const decode = (phrase2) => {
  let join = '';

  let decodeBase = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  phrase2.split('').forEach((n) => { join += decodeBase[n] ? decodeBase[n] : n; });
  return join;
};
// const encode = (phrase) => {
//   phraseSplit = phrase.split('');
//   let join = '';
//   for (let letter in phraseSplit) {
//     if (phraseSplit[letter] === 'a') {
//       join += '1';
//     } else if (phraseSplit[letter] === 'e') {
//       join += '2';
//     } else if (phraseSplit[letter] === 'i') {
//       join += '3';
//     } else if (phraseSplit[letter] === 'o') {
//       join += '4';
//     } else if (phraseSplit[letter] === 'u') {
//       join += '5';
//     } else {
//       join += phraseSplit[letter];
//     }
//   }
//   return join;
// };

// const decode = (phrase2) => {
//   phraseSplit = phrase2.split('');
//   let join = '';
//   for (let letter in phraseSplit) {
//     if (phraseSplit[letter] === '1') {
//       join += 'a';
//     } else if (phraseSplit[letter] === '2') {
//       join += 'e';
//     } else if (phraseSplit[letter] === '3') {
//       join += 'i';
//     } else if (phraseSplit[letter] === '4') {
//       join += 'o';
//     } else if (phraseSplit[letter] === '5') {
//       join += 'u';
//     } else {
//       join += phraseSplit[letter];
//     }
//   }
//   return join;
// };

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  let objects = [];
  for (let index of array.sort()) {
    objects.push({
      tech: index,
      name: string });
  }

  return objects;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
