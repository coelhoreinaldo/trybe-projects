const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

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
    // ESCREVA SEUS TESTES ABAIXO:    
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
