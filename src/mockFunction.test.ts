import { obj } from './mockFucntion';

// let spyFn: jest.SpyInstance;

describe('beforeEach, afterEach 적용', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('obj.minus 메소드가 1번 호출되었다.(spy 삽입)', () => {
    jest.spyOn(obj, 'minus');
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(-1);
  });
  test('obj.minus 메소드가 1번 호출되었다.(spy는 심고, 실행은 안되게)', () => {
    jest.spyOn(obj, 'minus').mockImplementation();
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
  });
});

test('obj.minus 메소드가 1번 호출되었다.(spy는 심고, 함수 구현 mock)', () => {
  jest.spyOn(obj, 'minus').mockImplementation(() => 5);
  const result = obj.minus(1, 2);
  expect(result).toBe(5);
});
test('obj.minus 메소드가 1번 호출되었다.(spy는 심고, 함수 구현 mock 한번씩만)', () => {
  jest
    .spyOn(obj, 'minus')
    .mockImplementationOnce(() => 5)
    .mockImplementationOnce(() => 2);
  const result = obj.minus(1, 2);
  expect(result).toBe(5);
  // spyFn.mockClear(); // Times, With 초기화
  // spyFn.mockReset(); // mockClear + mockImplementation(() => {})
  // spyFn.mockRestore(); // 아예 전부 없앰
});

test.skip('obj.minus 메소드가 1번 호출되었다.(spy는 심고, 함수 return 값만 바꾸기)', () => {
  jest.spyOn(obj, 'minus').mockReturnValue(5);
  const result = obj.minus(1, 2);
  expect(result).toBe(5);
});

test.skip('obj.minus 메소드가 1번 호출되었다.(spy는 심고, 함수 return 값만 한번 바꾸기)', () => {
  jest.spyOn(obj, 'minus').mockReturnValueOnce(5).mockReturnValueOnce(2);
  const result = obj.minus(1, 2);
  expect(result).toBe(5);
});

test.todo('나중에 만들거야!');

beforeAll(() => {
  console.log('이 파일 준비사항');
});

afterAll(() => {
  console.log('이 파일 마무리');
});
