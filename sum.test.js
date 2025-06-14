const sum = require('./sum');

test('Suma 2 numeros', () => {
    expect(sum(1, 2)).toBe(3);
});