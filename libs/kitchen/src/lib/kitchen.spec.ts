import { kitchen, validateDish } from './kitchen';
import { dishMock } from './mocks/dishes.mocks';

import * as utils from './ingredients';

describe('kitchen', () => {
  const verifySpy = jest.spyOn(utils, 'verify');

  // beforeEach(()=>{})
  afterEach(() => {
    verifySpy.mockReset();
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

    // verifySpy.mockImplementation(() => validVerification);
    verifySpy.mockReturnValue(validVerification);

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

    verifySpy.mockReturnValue(invalidVerification);

    // Act
    const result = validateDish(dishMock);
    console.log(verifySpy.mock);
    console.log(verifySpy.mock.calls);
    console.log(verifySpy.mock.results);

    // Assert
    expect(result).toBe(false);
    expect(utils.verify).toHaveBeenCalledWith(dishMock);
    expect(verifySpy.mock.results[0].value).toEqual(invalidVerification);
  });
});
