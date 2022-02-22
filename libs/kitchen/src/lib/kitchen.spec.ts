import { ingredients, verify } from './ingredients';
import { kitchen, validateDish } from './kitchen';
import { dishMock } from './mocks/dishes.mocks';

jest.mock('./ingredients.ts', () => {
  return {
    ingredients: [
      {
        name: 'limón',
        dish: { name: 'ceviche' },
        inStock: false
      }
    ],
    verify: jest.fn()
  };
});

const verifyMock = verify as jest.MockedFunction<typeof verify>;

describe('kitchen', () => {
  // beforeEach(()=>{})
  afterEach(() => {
    verifyMock.mockReset();
  });

  it('should work', () => {
    expect(kitchen()).toEqual('kitchen');
  });

  it('should get a valid the Dish...', () => {
    // Arrange
    const validVerification = {
      missedIngredients: [],
      valid: true
    };

    ingredients; //?

    // verifyMock.mockImplementation(() => validVerification);
    verifyMock.mockReturnValue(validVerification);

    // Act
    const result = validateDish(dishMock);

    // Assert
    expect(result).toBe(true);
    expect(verify).toHaveBeenCalledWith(dishMock);
  });

  it('should get an invalid Dish...', () => {
    verifyMock.mockRestore();

    const invalidVerification = {
      missedIngredients: ['limón', 'cebolla'],
      valid: false
    };

    verifyMock.mockReturnValue(invalidVerification);

    // Act
    const result = validateDish(dishMock);
    console.log(verifyMock.mock);
    console.log(verifyMock.mock.calls);
    console.log(verifyMock.mock.results);

    // Assert
    expect(result).toBe(false);
    expect(verify).toHaveBeenCalledWith(dishMock);
    expect(verifyMock.mock.results[0].value).toEqual(invalidVerification);
  });
});
