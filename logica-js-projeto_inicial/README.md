# Desafios - Lógica de Programação (JavaScript)

> Projeto de desafios práticos do curso "Lógica de programação: mergulhe em programação com JavaScript" da Alura, como parte da Trilha DevOps do Santander Open Academy.

## 🚀 Sobre o Projeto

Este projeto executa os 10 desafios de lógica propostos no curso. Esta é uma **versão refatorada** que vai além do básico, focando em escrever um código mais robusto e profissional que previne erros de usuário.

O script aguarda a página carregar, solicita nome e idade, e então valida as informações para exibir os alertas condicionais corretos.

## ✨ Funcionalidades Principais

Este código implementa validações de entrada para garantir que o programa não quebre:

-   **Execução Segura:** O script só roda após o carregamento completo da página, usando `window.addEventListener('load')`.
-   **Validação de Nome:** Verifica se o usuário cancelou o `prompt` ou deixou o campo em branco (`null` ou `trim() === ''`). Se sim, utiliza o valor padrão "Lua".
-   **Validação de Idade:** Converte a entrada para número (`parseInt`) e verifica se é um número inválido (`isNaN`) ou 0. Se sim, utiliza o valor padrão 25.

## 📚 Conceitos Praticados

-   Variáveis (`var`)
-   Interação com o usuário (`alert`, `prompt`)
-   Manipulação de Strings (`.trim()`)
-   Conversão de Tipos (`parseInt`)
-   Verificação de Números (`isNaN`)
-   Estruturas condicionais (`if`)
-   Operadores lógicos (`||`, `&&`, `>=`)
-   Event Listeners (`window.addEventListener`)