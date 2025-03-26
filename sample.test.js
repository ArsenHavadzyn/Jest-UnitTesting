import { round, trunc, random } from './sample.js';

describe('round function', () => {
  test('should round 4.6 to 5', () => {
    expect(round(4.6)).toBe(5);
  });

  test('should round 4.4 to 4', () => {
    expect(round(4.4)).toBe(4);
  });

  test('should round -4.5 to -4', () => {
    expect(round(-4.5)).toBe(-4);
  });

  test('should round 0.1 to 0', () => {
    expect(round(0.1)).toBe(0);
  });

  test('should round -0.9 to -1', () => {
    expect(round(-0.9)).toBe(-1);
  });
});

describe('trunc function', () => {
  test('should truncate 4.9 to 4', () => {
    expect(trunc(4.9)).toBe(4);
  });

  test('should truncate -4.9 to -4', () => {
    expect(trunc(-4.9)).toBe(-4);
  });

  test('should truncate 0.99 to 0', () => {
    expect(trunc(0.99)).toBe(0);
  });

  test('should truncate -0.99 to 0', () => {
    expect(trunc(-0.99)).toBeCloseTo(0);
  });

  test('should truncate 5 to 5', () => {
    expect(trunc(5)).toBe(5);
  });
});

describe('random function', () => {
  test('should return a number between 0 and 1', () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });

  test('should return different values on multiple calls', () => {
    const result1 = random();
    const result2 = random();
    expect(result1).not.toBe(result2);
  });

  test('should return a float number', () => {
    expect(Number.isInteger(random())).toBe(false);
  });

  test('should be a function', () => {
    expect(typeof random).toBe('function');
  });

  test('should not return negative values', () => {
    expect(random()).toBeGreaterThanOrEqual(0);
  });
});