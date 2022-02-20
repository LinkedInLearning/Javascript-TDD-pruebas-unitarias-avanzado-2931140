export function kitchen(): string {
  return 'kitchen';
}

export type Taste = 'spicy' | 'sweet' | 'sour';

export interface Country {
  name: string;
  language: string;
}

export interface Dish {
  taste: Taste;
  name: string;
  country: Country;
}

const dish: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  }
};

export type SweetType = 'no-carbs' | 'low-carbs' | 'high-carbs';

export interface Dessert {
  type: SweetType;
  name: string;
}

const dessert: Dessert = {
  type: 'low-carbs',
  name: 'Picarones'
};

export type OrderKind = Dish | Dessert;

function createOrder<OrderKind>(order: OrderKind): OrderKind {
  // Actions...
  return order;
}

createOrder<Dessert>(dessert); //?
createOrder<Dish>(dish); //?
