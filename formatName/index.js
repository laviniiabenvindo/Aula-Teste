function formatName(nome, sobrenome) {
  return `${nome.toUpperCase()} ${sobrenome.toUpperCase()}`;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    return idade;
  }
  return idade;
}

function getUser(nome, idade, email) {
  return {
    nome,
    idade,
    email,
  };
}

module.exports = { formatName, verificarIdade, getUser };
