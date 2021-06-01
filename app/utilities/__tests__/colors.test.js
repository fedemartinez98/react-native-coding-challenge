import {
  white,
  gray,
  lightGray,
  darkGray,
  black,
  orange,
  red,
  brown,
  gold,
  pink,
  transparentBlack
} from '../colors';

test('should verify the hex color', () => {
  expect(white).toBe('#ffffff');
  expect(gray).toBe('#e9e9e9');
  expect(lightGray).toBe('#f0f0f0');
  expect(darkGray).toBe('#a1a1a4');
  expect(black).toBe('#000000');
  expect(orange).toBe('#ff4500');
  expect(red).toBe('#ff0000');
  expect(brown).toBe('#a52a2a');
  expect(gold).toBe('#ffd700');
  expect(pink).toBe('#ff1493');
  expect(transparentBlack).toBe('#00000000');
});

test('should verify the hex color contains #', () => {
  const expected = [expect.stringMatching(/^#/)];

  expect([
    white,
    gray,
    lightGray,
    darkGray,
    black,
    orange,
    red,
    brown,
    gold,
    pink,
    transparentBlack
  ]).toEqual(expect.arrayContaining(expected));
});
