import { after3days } from './date';

test('3일 후를 return한다.', () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 11, 10));
  const date = new Date();
  date.setDate(date.getDate() + 3);
  expect(after3days()).toStrictEqual(new Date(2024, 11, 13));
});

test('0.1 + 0.2 = 0.3', () => {
  expect(0.1 + 0.2).not.toBe(0.3);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

afterEach(() => {
  jest.useRealTimers();
});
