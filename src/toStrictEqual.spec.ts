import { obj } from './toStrictEqual';

test('객체 끼리는 toStrictEqual로 비교', () => {
  expect(obj()).toStrictEqual({ a: 'hello' });
  expect(obj()).not.toBe({ a: 'hello' });
});

test('배열 끼리도 toStrictEqual로 비교', () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
