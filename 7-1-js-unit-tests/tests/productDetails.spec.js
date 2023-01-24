const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Vinho', 'Água'))).toBeTruthy();
    expect((productDetails('Vinho', 'Água'))).toHaveLength(2);
    expect(typeof (productDetails('Vinho', 'Água'))[0]).toBe('object');
    expect(typeof (productDetails('Vinho', 'Água'))[1]).toBe('object');
    expect((productDetails('Vinho', 'Água'))[0]).not.toEqual((productDetails('Vinho', 'Água'))[1]);
    const productDetails0 = productDetails('Vinho', 'Água')[0].details.productId;
    const productDetails1 = productDetails('Vinho', 'Água')[1].details.productId;
    expect(productDetails0.endsWith('123')).toBeTruthy();
    expect(productDetails1.endsWith('123')).toBeTruthy();
  });
});
