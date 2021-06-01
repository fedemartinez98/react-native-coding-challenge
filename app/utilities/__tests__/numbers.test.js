import {getDecimal, getWhole} from '../numbers';

test('should verify that gets whole number', () => {
    expect(getWhole(1.23)).toBe(1);
});

test('should verify that gets whole number 0', () => {
    expect(getWhole(0.0)).toBe(0);
});

test('should verify that gets decimal number', () => {
    expect(getDecimal(1.23)).toBe(23);
});

test('should verify that gets decimal number 0', () => {
    expect(getDecimal(1.0)).toBe(0);
});

test('should verify that gets number 0', () => {
    expect(getWhole(0)).toBe(0);
});

test('should verify that gets number 0', () => {
    expect(getDecimal(0)).toBe(0);
});