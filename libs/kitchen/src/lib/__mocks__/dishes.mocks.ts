import { Dish, Ingredient } from '@yfx-data-models';

export const dishMock: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  },
  available: true
};

export const tacosMock: Dish = {
  taste: 'spicy',
  name: 'tacos',
  country: {
    name: 'México',
    language: 'Español'
  },
  available: false
};

export const manguMock: Dish = {
  taste: 'sweet',
  name: 'mangú',
  country: {
    name: 'República Dominicana',
    language: 'Español'
  },
  available: true
};

export const ingredientsMocks: Ingredient[] = [
  {
    name: 'pescado',
    dish: { name: 'Ceviche' },
    inStock: true
  },
  {
    name: 'limón',
    dish: { name: 'Ceviche' },
    inStock: false
  },
  {
    name: 'tortillas',
    dish: { name: 'Tacos' },
    inStock: true
  }
];
