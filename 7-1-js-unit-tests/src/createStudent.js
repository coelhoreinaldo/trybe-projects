const createStudent = (nome) => {
  const goodPerson = 'Eita pessoa boa!';
  return {
    name: nome,
    feedback: () => goodPerson,
  };
};

console.log(createStudent('Leandrão, o Lobo Solitário'));
module.exports = createStudent;
