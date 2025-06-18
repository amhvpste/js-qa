const multiply = require('./multiply');

describe('multiply', () => {
  test('should multiply positive numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });

  test('should multiply negative numbers', () => {
    expect(multiply(-3, -2)).toBe(6);
  });

  test('should multiply negative and positive numbers', () => {
    expect(multiply(-3, 2)).toBe(-6);
  });
});
