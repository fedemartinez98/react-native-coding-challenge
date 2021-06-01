import { getResponsiveFontSize, getResponsiveWidth, getResponsiveHeight, width, height } from '../dimensions';

test('should verify type number font size', () => {
  expect(typeof getResponsiveFontSize(2)).toBe('number');
});

test('should verify type number of responsive width', () => {
    expect(typeof getResponsiveWidth(2)).toBe('number');
});

test('should verify type number of responsive height', () => {
    expect(typeof getResponsiveHeight(2)).toBe('number');
});

test('should verify type number of width', () => {
    expect(typeof width).toBe('number');
});

test('should verify type number of height', () => {
    expect(typeof height).toBe('number');
});