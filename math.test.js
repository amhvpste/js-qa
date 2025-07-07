import { multiply } from './math.js';

describe('multiply', () => {
  test('positive * positive', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('negative * negative', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  test('negative * positive', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('zero multiplication', () => {
    expect(multiply(0, 5)).toBe(0);
  });
});
