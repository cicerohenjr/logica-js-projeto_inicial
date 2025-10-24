// Contador de 1 a 10 usando while
window.addEventListener('load', function() {
    let contador = 1;  // Inicializa o contador
    
    console.log('Iniciando contagem de 1 a 10:');
    
    while (contador <= 10) {
        // Mostra o número atual no console e em um alert
        console.log(contador);
        alert(`Número: ${contador}`);
        
        // Incrementa o contador
        contador++;
    }
    
    console.log('Contagem finalizada!');
    alert('Contagem crescente finalizada!');

    // Contador regressivo de 10 até 0
    let contadorRegressivo = 10;  // Inicializa o contador regressivo
    
    console.log('\nIniciando contagem regressiva de 10 a 0:');
    
    while (contadorRegressivo >= 0) {
        // Mostra o número atual no console e em um alert
        console.log(contadorRegressivo);
        alert(`Contagem regressiva: ${contadorRegressivo}`);
        
        // Decrementa o contador
        contadorRegressivo--;
    }
    
    console.log('Contagem regressiva finalizada!');
    alert('Contagem regressiva finalizada!');

    // Contador regressivo personalizado
    let numeroInicial = prompt('Digite um número para iniciar a contagem regressiva:');
    
    // Converte para número e verifica se é válido
    numeroInicial = parseInt(numeroInicial);
    
    if (isNaN(numeroInicial)) {
        console.log('Por favor, digite um número válido.');
        alert('Por favor, digite um número válido.');
    } else {
        console.log(`\nIniciando contagem regressiva de ${numeroInicial} até 0:`);
        
        // Faz a contagem regressiva do número escolhido até 0
        while (numeroInicial >= 0) {
            console.log(numeroInicial);
            numeroInicial--;
        }
        
        console.log('Contagem regressiva personalizada finalizada!');
        alert('Contagem regressiva personalizada finalizada!');
    }

    // Contador progressivo personalizado
    let numeroFinal = prompt('Digite um número para a contagem progressiva (contará de 0 até ele):');
    
    // Converte para número e verifica se é válido
    numeroFinal = parseInt(numeroFinal);
    
    if (isNaN(numeroFinal)) {
        console.log('Por favor, digite um número válido.');
        alert('Por favor, digite um número válido.');
    } else {
        console.log(`\nIniciando contagem progressiva de 0 até ${numeroFinal}:`);
        
        // Inicializa o contador em 0
        let contadorProgressivo = 0;
        
        // Faz a contagem progressiva de 0 até o número escolhido
        while (contadorProgressivo <= numeroFinal) {
            console.log(contadorProgressivo);
            contadorProgressivo++;
        }
        
        console.log('Contagem progressiva personalizada finalizada!');
        alert('Contagem progressiva personalizada finalizada!');
    }
});
