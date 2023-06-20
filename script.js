var myForm = document.getElementById("myForm");

// Lidando com o evento de envio do formulário
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitando o comportamento padrão do envio do formulário

  // Obtendo os valores do formulário
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;

  // Exibindo o resultado na div com id "result"
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Nome: " + nome + "<br>Idade: " + idade + "<br>Altura: " + altura + "<br>Peso: " + peso;
});