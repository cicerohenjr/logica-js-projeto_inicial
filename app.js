
// Declaração de variável (será atribuída via prompt dentro do load)
var nome;
var idade;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;
var mensagemDeErro = 'Erro! Preencha todos os campos';

// Exibe um alerta de boas-vindas ao carregar a página
window.addEventListener('load', function() {
	// Pergunta o nome do usuário ao carregar a página
	var resposta = prompt('Qual é o seu nome?');
	nome = (resposta === null || resposta.trim() === '') ? 'Lua' : resposta.trim();

	// Pergunta a idade do usuário e converte para número. Usa fallback 25 se inválido.
	var respostaIdade = prompt('Qual é a sua idade?');
	var idadeNum = parseInt(respostaIdade, 10);
	idade = (!isNaN(idadeNum) && idadeNum > 0) ? idadeNum : 25;

	// Valida se pode tirar habilitação
	if (idade >= 18) {
		alert('Pode tirar a habilitação!');
	}

	alert('Boas vindas ao nosso site!');
	alert(mensagemDeErro);
});



