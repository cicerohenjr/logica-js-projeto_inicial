// Exibe mensagem de boas-vindas no console
console.log('Boas vindas ao nosso site!');

// Declara variável com o nome e exibe saudação personalizada
var nome = 'Seu Nome'; // <--- substitua 'Seu Nome' pelo seu nome real
console.log(`Olá, ${nome}!`);
// Exibe saudação em um alerta
alert(`Olá, ${nome}!`);

// Pergunta a linguagem de programação favorita e exibe no console
var linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
// Se o usuário cancelar, usamos uma mensagem padrão
linguagemFavorita = linguagemFavorita === null ? 'Nenhuma informada' : linguagemFavorita.trim();
console.log(`Linguagem favorita: ${linguagemFavorita}`);

// Declara dois valores, soma e exibe o resultado
// Valores para a soma (usamos nomes distintos para evitar conflito com a próxima parte)
var valor1_add = 12; // você pode alterar esse valor
var valor2_add = 8;  // você pode alterar esse valor
var resultado_soma = valor1_add + valor2_add;
console.log(`A soma de ${valor1_add} e ${valor2_add} é igual a ${resultado_soma}.`);

// Agora realiza a subtração usando as variáveis pedidas pelo exercício
var valor1 = 20; // escolha numérica (pode alterar)
var valor2 = 5;  // escolha numérica (pode alterar)
var resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Pergunta a idade do usuário e verifica maioridade
var idadeResposta = prompt('Por favor, digite sua idade:');
var idade = parseInt(idadeResposta, 10);

if (isNaN(idade)) {
	console.log('Idade inválida. Por favor, insira um número.');
} else if (idade >= 18) {
	console.log('Você é maior de idade.');
} else {
	console.log('Você é menor de idade.');
}

// Desafio 8: pedir um número e verificar se é positivo, negativo ou zero
var numero = prompt('Digite um número para verificar se é positivo, negativo ou zero:');
var numeroVal = parseFloat(numero);

if (isNaN(numeroVal)) {
	console.log('Entrada inválida. Por favor, digite um número.');
} else if (numeroVal > 0) {
	console.log('O número é positivo.');
} else if (numeroVal < 0) {
	console.log('O número é negativo.');
} else {
	console.log('O número é zero.');
}

	// Desafio 9: imprimir números de 1 a 10 usando while
	console.log('\nDesafio 9: imprimindo números de 1 a 10 usando while:');
	var numeroContador = 1;
	while (numeroContador <= 10) {
		console.log(numeroContador);
		numeroContador++;
	}

	// Desafio 10: verificar nota e exibir aprovado/reprovado
	var nota = 7; // atribua o valor desejado aqui
	if (nota >= 7) {
		console.log('Aprovado');
	} else {
		console.log('Reprovado');
	}

	// Desafio 11: gerar número aleatório com Math.random e exibir no console
	// Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
	var aleatorio = Math.random();
	console.log(`Número aleatório (0 <= n < 1): ${aleatorio}`);

	// Opcional: gerar um inteiro aleatório entre 1 e 100
	var aleatorioInteiro = Math.floor(Math.random() * 100) + 1;
	console.log(`Número inteiro aleatório entre 1 e 100: ${aleatorioInteiro}`);

	// Desafio 12: gerar inteiro aleatório entre 1 e 10 e exibir no console
	var aleatorio1a10 = Math.floor(Math.random() * 10) + 1; // 1..10
	console.log(`Número inteiro aleatório entre 1 e 10: ${aleatorio1a10}`);

	// Desafio 13: gerar inteiro aleatório entre 1 e 1000 e exibir no console
	var aleatorio1a1000 = Math.floor(Math.random() * 1000) + 1; // 1..1000
	console.log(`Número inteiro aleatório entre 1 e 1000: ${aleatorio1a1000}`);


