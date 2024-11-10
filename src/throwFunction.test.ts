import { CustomError, customError, error } from './throwFunction';

test('error가 난다.', () => {
  expect(() => error()).toThrow(Error);
  expect(() => customError()).toThrow(CustomError);
});

test('error가 난다.(try/catch)', () => {
  try {
    error();
  } catch (e) {
    expect(e).toStrictEqual(new Error());
  }
});
