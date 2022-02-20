import { Dessert, Dish } from '@yfx-data-models';

export function kitchen(): string {
  return 'kitchen';
}

const dish: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  }
};

const dessert: Dessert = {
  type: 'low-carbs',
  name: 'Picarones'
};

function createOrder<OrderKind>(order: OrderKind): OrderKind {
  // Actions...
  return order;
}

createOrder<Dessert>(dessert); //?
createOrder<Dish>(dish); //?
