const sum = require('./sum');

test('Suma 2 numeros', () => {
    expect(sum(0, 2)).toBe(3);
});