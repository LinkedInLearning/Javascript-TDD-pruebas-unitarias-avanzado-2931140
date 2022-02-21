import { verify } from './ingredients';
import { dishMock } from './mocks/dishes.mocks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils = require('./ingredients');

describe('ingredients', () => {
  it('should get invalid dish', () => {
    const expectedVerification = {
      missedIngredients: ['limón', 'cebolla'],
      valid: false
    };

    expect(verify(dishMock)).toEqual(expectedVerification);
  });

  it('should get a valid dish', () => {
    const originalIngredients = utils.ingredients;

    utils.ingredients = [
      {
        name: 'pescado',
        dish: { name: 'ceviche' },
        inStock: true
      },
      {
        name: 'limón',
        dish: { name: 'ceviche' },
        inStock: true
      },
      {
        name: 'cebolla',
        dish: { name: 'ceviche' },
        inStock: true
      }
    ];

    const expectedVerification = {
      missedIngredients: [],
      valid: true
    };

    expect(verify(dishMock)).toEqual(expectedVerification);
    utils.ingredients; //?
    utils.ingredients = originalIngredients;
    utils.ingredients;
  });
});
