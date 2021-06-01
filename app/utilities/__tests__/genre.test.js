import { convertToGenre } from "../genre";

test('should verify that gets two genere types ok', () => {
    expect(convertToGenre([99,10402])).toBe("Documentary, Music");
});

test('should verify that gets one genere types ok', () => {
    expect(convertToGenre([18])).toBe("Drama");
});

test('should verify that gets three genere types ok 3', () => {
    expect(convertToGenre([18,99,10402])).toBe("Drama, Documentary, Music");
});