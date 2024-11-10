import { C } from './toMatchObject';

test('클래스는 toMatchObject 로 비교', () => {
  const c = new C('hello');
  expect(c).toMatchObject({ a: 'hello' });
  expect(c).not.toStrictEqual({ a: 'hello' });
  expect(c).not.toBe({ a: 'hello' });
});
