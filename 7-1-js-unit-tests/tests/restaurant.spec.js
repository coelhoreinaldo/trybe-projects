const { keepConsumption, total, createMenu, clearVariables } = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  beforeEach(() => {
    clearVariables();
  })
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu())).toEqual(['food', 'drink']);
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {} });

  });
  it('Verifica se object.consumption tem o comportamento esperado', () => {
    expect(createMenu({ food: {}, drink: {} }).consumption).toEqual([]);
  });
  it('Verifica se object.order tem o comportamento esperado', () => {
    const restaurantTest = createMenu({
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 },
    });
    restaurantTest.order('coxinha');

    expect(restaurantTest.consumption).toEqual(expect.arrayContaining(['coxinha']));
    expect(restaurantTest.order('picanha')).toBe('Item indisponível');
    restaurantTest.order('cerveja')
    restaurantTest.order('sanduiche')
    restaurantTest.order('agua')
    expect(restaurantTest.consumption).toEqual(expect.arrayContaining(['cerveja', 'sanduiche', 'agua']));
    restaurantTest.order('agua')
    restaurantTest.order('agua')
    expect(restaurantTest.consumption).toStrictEqual(['coxinha', 'cerveja', 'sanduiche', 'agua']);
  });
  test('Verifica se object.pay tem o comportamento esperado', () => {
    const meuRestaurante = createMenu({
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 },
    });
    meuRestaurante.order('coxinha');
    meuRestaurante.order('cerveja');
    meuRestaurante.order('agua');
    expect(meuRestaurante.pay()).toBe(16.17);
  });
});
