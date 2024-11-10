import { noPromise, okPromise } from './asyncFunction';

// promise는 꼭 return을 해주어야 한다.
test('ok Promise 테스트', () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  return expect(okSpy()).resolves.toBe('ok');
});
test('ok Promise 테스트2', () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  return okSpy().then((result) => {
    expect(result).toBe('ok');
  });
});
test('no Promise 테스트', () => {
  expect.assertions(1);
  const okSpy = jest.fn(noPromise);
  return expect(okSpy()).rejects.toBe('no');
});
test('no Promise 테스트2', () => {
  expect.assertions(1);
  const okSpy = jest.fn(noPromise);
  return okSpy().catch((result) => {
    expect(result).toBe('no');
  });
});
test('ok promise await로도 가능', async () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();
  expect(result).toBe('ok');
});

test('no promise await로도 가능', async () => {
  expect.assertions(1);
  const okSpy = jest.fn(noPromise);
  try {
    await okSpy();
  } catch (e) {
    expect(e).toBe('no');
  }
});

// 아래처럼 사용도 가능
// jest.spyOn(namespace, 'okPromise').mockResolvedValue('ok');
// jest.spyOn(namespace, 'noPromise').mockRejectedValue('no');
