// Pergunta o dia da semana e mostra mensagem apropriada
window.addEventListener('load', function() {
    // Pede o nome do usuário e mostra mensagem de boas-vindas personalizada
    let nomeUsuario = prompt('Por favor, digite seu nome:');
    
    // Verifica se o nome foi fornecido e remove espaços em branco extras
    nomeUsuario = nomeUsuario ? nomeUsuario.trim() : 'Visitante';
    
    // Mostra mensagem de boas-vindas personalizada usando template string
    alert(`Olá, ${nomeUsuario}! Seja bem-vindo(a) ao nosso sistema!`);

    let diaDaSemana = prompt('Qual é o dia da semana?');
    
    // Converte para minúsculas para fazer a comparação ignorando maiúsculas/minúsculas
    diaDaSemana = diaDaSemana.toLowerCase().trim();
    
    if (diaDaSemana === 'sábado' || diaDaSemana === 'sabado' || diaDaSemana === 'domingo') {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }
    
    // Verifica se um número é positivo ou negativo
    let numero = prompt('Digite um número para verificar se é positivo ou negativo:');
    
    // Converte para número e verifica se é válido
    numero = parseFloat(numero);
    
    if (isNaN(numero)) {
        alert('Por favor, digite um número válido.');
    } else if (numero > 0) {
        alert('O número é positivo!');
    } else if (numero < 0) {
        alert('O número é negativo!');
    } else {
        alert('O número é zero!');
    }
    
    // Sistema de pontuação do jogo
    let pontuacao = prompt('Digite sua pontuação no jogo:');
    
    // Converte para número e verifica se é válido
    pontuacao = parseInt(pontuacao);
    
    if (isNaN(pontuacao)) {
        alert('Por favor, digite uma pontuação válida.');
    } else if (pontuacao >= 100) {
        alert('Parabéns, você venceu!');
    } else {
        alert('Tente novamente para ganhar.');
    }
    
    // Verifica saldo da conta e mostra mensagem formatada
    let saldo = prompt('Digite o saldo da sua conta:');
    
    // Converte para número e formata com 2 casas decimais
    saldo = parseFloat(saldo);
    
    if (isNaN(saldo)) {
        alert('Por favor, digite um valor válido.');
    } else {
        // Usa template string para formatar a mensagem com o saldo
        alert(`Seu saldo é de R$ ${saldo.toFixed(2)}`);
        
        // Mensagem adicional sobre o estado da conta
        if (saldo > 0) {
            alert(`Seu saldo está positivo! Você tem R$ ${saldo.toFixed(2)} em conta.`);
        } else if (saldo < 0) {
            alert(`Atenção! Seu saldo está negativo. Você tem R$ ${saldo.toFixed(2)} em conta.`);
        } else {
            alert('Atenção! Sua conta está zerada.');
        }
    }
});
