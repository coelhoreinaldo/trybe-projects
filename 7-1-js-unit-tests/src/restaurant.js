let keepConsumption = [];
let total = 0;

const createMenu = (object) => {
  const fetch = {
    fetchMenu: () => object,
    order: (order) => {
      if (keepConsumption.includes(order)) {
        return 'Item já adicionado';
      }
      if (Object.keys(object.food).includes(order) || Object.keys(object.drinks).includes(order)) {
        return keepConsumption.push(order);
      }
      return 'Item indisponível';
    },
    consumption: keepConsumption,
    pay: () => {
      keepConsumption.forEach((item) => {
        if (Object.keys(object.food).includes(item)) {
          total += object.food[item];
        }
        if (Object.keys(object.drinks).includes(item)) {
          total += object.drinks[item];
        }
      });
      return total + total * 0.10;
    },
  };
  
  return fetch;
};

const clearVariables = () => {
  total = 0;
  keepConsumption = [];
};

// const meuRestaurante = createMenu({
//   food: { coxinha: 3.90, sanduiche: 9.90 },
//   drinks: { agua: 3.90, cerveja: 6.90 },
// });    
// meuRestaurante.order('coxinha');
// meuRestaurante.order('cerveja');
// meuRestaurante.order('agua');
// console.log(meuRestaurante.pay());

module.exports = { keepConsumption, total, createMenu, clearVariables };
