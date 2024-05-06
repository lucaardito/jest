import { abs, homeworkAverage } from '../mathFunctions';

describe('abs', () => {
  test('returns the absolute value of a positive number', () => {
    expect(abs(10)).toBe(10);
  });

  test('returns the absolute value of a negative number', () => {
    expect(abs(-20)).toBe(20);
  });

  test('returns zero if zero is passed', () => {
    expect(abs(0)).toBe(0);
  });
});

describe('homeworkAverage', () => {
  test('calculates average excluding the lowest score', () => {
    expect(homeworkAverage([90, 100, 80])).toBe(95);
  });

  test('handles an array with one score', () => {
    expect(homeworkAverage([100])).toBe(0); 
  });

  test('returns the average of multiple identical scores', () => {
    expect(homeworkAverage([100, 100, 100])).toBe(100); 
  });

  test('returns zero if the array is empty', () => {
    expect(homeworkAverage([])).toBe(0);
  });
});