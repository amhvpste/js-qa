import { multiply, divide, sum } from './math.js';

describe('multiply', () => {
  it.each([
    { inputA: 2, inputB: 3, expected: 6 },
    { inputA: 6, inputB: 3, expected: 18 },
    { inputA: -2, inputB: -3, expected: 6 },
    { inputA: -2, inputB: 3, expected: -6 },
    { inputA: 0, inputB: 5, expected: 0 },
  ])(
    'multiplies $inputA * $inputB to equal $expected',
    ({ inputA, inputB, expected }) => {
      expect(multiply(inputA, inputB)).toBe(expected);
    }
  );
});

describe('divide', () => {
  it.each([
    { inputA: 10, inputB: 2, expected: 5 },
    { inputA: -10, inputB: -2, expected: 5 },
    { inputA: -10, inputB: 2, expected: -5 },
    { inputA: 0, inputB: 5, expected: 0 },
  ])(
    'divides $inputA / $inputB to equal $expected',
    ({ inputA, inputB, expected }) => {
      expect(divide(inputA, inputB)).toBe(expected);
    }
  );

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});

describe('sum', () => {
  it.each([
    { inputA: 1, inputB: 2, expected: 3 },
    { inputA: -1, inputB: -2, expected: -3 },
    { inputA: -1, inputB: 2, expected: 1 },
    { inputA: 0, inputB: 5, expected: 5 },
  ])(
    'adds $inputA + $inputB to equal $expected',
    ({ inputA, inputB, expected }) => {
      expect(sum(inputA, inputB)).toBe(expected);
    }
  );
});
