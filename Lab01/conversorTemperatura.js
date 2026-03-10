let fahrenheit; // Variável global para armazenar o valor convertido, assim sendo declarada global a variável poderá ser acessada por outras funções caso necessário.

function converter() {
  const celsius = document.getElementById("celsius").value;
  fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("resultado").innerHTML = `A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`;
}