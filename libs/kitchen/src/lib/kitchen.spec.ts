import { kitchen, validateDish } from './kitchen';
import { dishMock } from './mocks/dishes.mocks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils = require('./ingredients');

describe('kitchen', () => {
  // Mocking dependency
  const originalVerify = utils.verify;

  // beforeEach(()=>{})
  afterEach(() => {
    utils.verify = originalVerify;
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

    // utils.verify = () => validVerification;
    utils.verify = jest.fn(() => validVerification);

    // Act
    const result = validateDish(dishMock);

    // Assert
    expect(result).toBe(true);
    expect(utils.verify).toHaveBeenCalledWith(dishMock);
  });

  it('should get an invalid Dish...', () => {
    const invalidVerification = {
      missedIngredients: ['limón', 'cebolla'],
      valid: false
    };

    utils.verify = jest.fn(() => invalidVerification);

    // Act
    const result = validateDish(dishMock);
    console.log(utils.verify.mock);
    console.log(utils.verify.mock.calls);
    console.log(utils.verify.mock.results);

    // Assert
    expect(result).toBe(false);
    expect(utils.verify).toHaveBeenCalledWith(dishMock);
    expect(utils.verify.mock.results[0].value).toEqual(invalidVerification);
  });
});
