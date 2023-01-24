/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('string')).toBeUndefined();
    expect(typeof circle(1)).toBe('object');
    expect(Object.keys(circle(3)).length).toBe(3);
    expect(circle()).toBeUndefined();
    expect(circle(2)).toHaveProperty('circumference', 12.56)
    expect(circle(3)).toHaveProperty('area', 28.259999999999998)
    expect(circle(3)).toHaveProperty('radius', 3)
    expect(circle(3)).toHaveProperty('circumference', 18.84)
  });
});
