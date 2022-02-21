import { Dish, Ingredient } from '@yfx-data-models';

export const ingredients: Ingredient[] = [
  {
    name: 'pescado',
    dish: { name: 'ceviche' },
    inStock: true
  },
  {
    name: 'limón',
    dish: { name: 'ceviche' },
    inStock: false
  },
  {
    name: 'cebolla',
    dish: { name: 'ceviche' },
    inStock: false
  },
  {
    name: 'tortillas',
    dish: { name: 'tacos' },
    inStock: true
  }
];

export function verify(dish: Dish): {
  valid: boolean;
  missedIngredients: string[];
} {
  const dishIngredients = ingredients.filter(
    (ingredient) => ingredient.dish.name === dish.name && !ingredient.inStock
  );

  const missedIngredients = dishIngredients.map(
    (ingredient) => ingredient.name
  );

  return {
    valid: missedIngredients.length > 0 ? false : true,
    missedIngredients
  };
}
