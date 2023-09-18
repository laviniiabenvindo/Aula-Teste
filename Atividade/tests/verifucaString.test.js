// toMatch vai passar se tem no email
test('Verifica se existe @ no email', () => {
  expect('lavinia@lavinia.com').toMatch(/@/);
});

// not.toMatch não vai passr se não tiver
test('Verica se existe #', () => {
  expect('123456').not.toMatch(/#/);
});

const frutas = ['Kiwi', 'Laranja', 'Maça', 'Amora', 'Pitaya', 'Goiaba'];

test('tem pitaya na sua lista de fruta', () => {
  expect(frutas).toContain('Pitaya');
});

const listaCompras = ['Arroz', 'Presunto', 'Pernil', 'Galinha'];

test('Não pode ter leite', () => {
  expect(listaCompras).not.toContain('Leite');
});

function number(num) {
  const novosNum = num.sort((a, b) => a - b);
  return novosNum;
}

const num2 = [13, 4, 1, 20, 56, 7];
const num = number(num2);

test('Verifica se os numeros estão ordenados', () => {
  expect(num).toEqual(num2);
});

const temperatura = require('../index');

test('Converte celsius para fahrenheit', () => {
  expect(temperatura(100)).toBe(212);
});
