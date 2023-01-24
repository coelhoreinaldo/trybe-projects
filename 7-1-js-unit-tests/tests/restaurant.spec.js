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

/*
A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

  Exemplo:
  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

    - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

    - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

    Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

    IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
    */
   // 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.
   // 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
   // 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'.
// 4: Faça a implementação do item 4 do README no arquivo src/restaurant.js.
// 5: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
// 6: Faça a implementação do item 6 do README no arquivo src/restaurant.js.
// 7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro
// - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
// - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
// Ex: obj.order('coxinha') --> ['coxinha']
// Ex: obj.order('picanha') --> Exibe "Item indisponível"
// 8: Faça a implementação do item 8 do README no arquivo src/restaurant.js.
// 9: Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
// 10: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.
// 11: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.
// 12: Faça a implementação do item 12 do README no arquivo src/restaurant.js.

