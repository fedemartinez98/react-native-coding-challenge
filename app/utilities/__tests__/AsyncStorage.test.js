import { getItem, setItem, checkExpiration } from '../asyncStorage';

test('should not get item equal value', async () => {
  const test = "This is a test";
  await setItem('@example', JSON.stringify(test));

  const error = "Another message";
  const res = await getItem('@example');
  const equal = (res == error);

  expect(equal).toBe(false);
});

test('should get item equal correct value', async () => {
  const test = "This is a test"
  await setItem('@example', JSON.stringify(test));

  const res = await getItem('@example');
  const equal = (res == test);

  expect(equal).toBe(true);
});

test('should be empty', async () => {
  await setItem('@example');

  const res = await getItem('@example');
  const equal = (res == null);
  
  expect(equal).toBe(true);
});

test('should not expire', async () => {
  var date = new Date().getTime();
  date = JSON.parse(date);
  const expired = await checkExpiration(date);
  expect(expired).toBe(false);
});

test('should expire', async () => {
  var date = JSON.stringify(new Date().getTime() - 2 *(1 * 24 * 60 * 60 * 1000));
  date = JSON.parse(date);
  const expired = await checkExpiration(date);

  expect(expired).toBe(true);
});
