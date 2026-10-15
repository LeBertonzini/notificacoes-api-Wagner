# Registro de Testes de Integração

**Aluno:** Letícia de Souza Bertonzini  
**Grupo:** Grupo 6
**Data:** 15/10/2026  

## Banco de teste
* **Nome do banco de teste:** `notificacoes_test`  
* **Por que ele é separado do banco da API:** Para garantir o isolamento dos testes, evitando que a execução limpe, altere ou polua os dados reais do ambiente de desenvolvimento ou produção da API.

## Testes escritos

| # | Arquivo | O que o teste verifica | Verde ou vermelho? |
|---|---|---|---|
| 1 | `evento.integration.test.js` | Grava o evento no banco com o nome correto | Verde |
| 2 | `participante.integration.test.js` | Não grava participante com e-mail inválido | Verde |
| 3 | `participante.integration.test.js` | Grava o nome novo no banco ao atualizar (Desafio) | Vermelho |

## Resultado
* **Linha "Tests:" da saída do npm run test:integration:** `Tests: 1 failed, 4 passed, 5 total` (ou a saída exata observada no console)

## Defeito encontrado
* **Teste:** `ParticipanteService.atualizar (integração) > grava o nome novo no banco`
* **Esperado:** `"Ana Maria"`
* **Obtido:** `"Ana"` (ou o valor anterior que não foi modificado)
* **O que o usuário da API veria:** A rota responde com o status HTTP 200 (Sucesso), dando a falsa impressão de que a alteração foi concluída, mas os dados novos não são salvos de verdade no banco de dados.
