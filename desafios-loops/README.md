# Desafios - Loops `while` (Atividade 07)

Terceiro conjunto de desafios práticos do curso "Lógica de programação: mergulhe em programação com JavaScript" da Alura, como parte da Trilha DevOps do Santander Open Academy.

## 🚀 Sobre o Projeto

O foco deste projeto foi praticar e dominar o uso de loops de repetição `while`, criando contadores progressivos e regressivos, tanto estáticos quanto dinâmicos (baseados na entrada do usuário).

Assim como nos projetos anteriores, o código foi escrito com foco em **boas práticas e robustez**:

-   O script só é executado após o carregamento completo da página (`window.addEventListener('load')`).
-   Todas as entradas do usuário (`prompt`) são validadas com `parseInt` e `isNaN` para prevenir erros e garantir que o programa só execute com números válidos.
-   O `console.log` é usado para fornecer feedback ao desenvolvedor sobre o fluxo do programa (ex: "Iniciando contagem...").

## ✨ Desafios Implementados

1.  **Contador de 1 a 10:** Um loop `while` simples com `contador++`.
2.  **Contador de 10 a 0:** Um loop `while` com `contador--`.
3.  **Contagem Regressiva Personalizada:** Solicita um número ao usuário, valida a entrada e executa um loop `while` de `numeroInicial` até 0.
4.  **Contagem Progressiva Personalizada:** Solicita um número ao usuário, valida a entrada e executa um loop `while` de 0 até `numeroFinal`.