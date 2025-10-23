# Desafios - Lógica Condicional (Atividade 09)

Segundo conjunto de desafios práticos do curso "Lógica de programação: mergulhe em programação com JavaScript" da Alura, como parte da Trilha DevOps do Santander Open Academy.

## 🚀 Sobre o Projeto

O foco deste projeto foi praticar estruturas condicionais (`if`, `else if`, `else`) e reforçar as boas práticas de validação de entrada do usuário.

Todo o código foi escrito de forma "defensiva" para prevenir erros, garantindo que o script só execute após o carregamento da página (`addEventListener('load')`) e que todas as entradas do `prompt` sejam validadas.

## ✨ Conceitos Praticados

-   **Boas-vindas (Desafio 5):** Coleta de nome com `prompt` e uso de `trim()` com um valor padrão (`|| 'Visitante'`) caso o usuário não digite nada.
-   **Dia da Semana (Desafio 1):** Uso de `.toLowerCase()` e `.trim()` para normalizar a entrada e permitir uma comparação de `if` robusta (ex: "Sábado", "sabado", " domingo ").
-   **Positivo/Negativo (Desafio 2):** Conversão de tipo com `parseFloat` e validação com `isNaN`, usando uma estrutura `if/else if/else` para tratar os três casos (positivo, negativo e zero).
-   **Pontuação (Desafio 3):** Conversão com `parseInt`, validação com `isNaN` e uma simples condição `if (pontuacao >= 100)`.
-   **Saldo da Conta (Desafio 4):** Conversão com `parseFloat`, validação `isNaN` e formatação de saída para moeda usando `.toFixed(2)` dentro de uma template string.