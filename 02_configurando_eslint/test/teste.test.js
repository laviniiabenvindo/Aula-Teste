const { somaNumero, subtraiNumero } = require('../index');

test('A função deve soma dois números', () => {
  const esperado = 1000;
  const retornado = somaNumero(800, 200);

  expect(retornado).toBe(esperado);
});

test('A função deve subtrair dois números', () => {
  const esperado = 10;
  const retornado = subtraiNumero(30, 20);

  expect(retornado).toBe(esperado);
});
