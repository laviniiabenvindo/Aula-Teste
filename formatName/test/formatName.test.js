const { formatName, verificarIdade, getUser } = require('../index');

test('Verifica se o nome completo está em letra maiúscula', () => {
  expect(formatName('mario', 'luigui')).toMatch('MARIO LUIGUI');
});

test('Verifica se é maior de idade', () => {
  expect(verificarIdade(19)).toBeGreaterThan(18);
});

test('Verifica se os objetos são igual', () => {
  const userEsperado = {
    nome: 'Lavínia',
    idade: 17,
    email: 'lavinia@lavinia.com',
  };
  const user = getUser('Lavínia', 17, 'lavinia@lavinia.com');

  expect(userEsperado).toEqual(user);
});
