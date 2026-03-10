document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (nome && email && senha) {
    alert('Cadastro realizado com sucesso!');
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});