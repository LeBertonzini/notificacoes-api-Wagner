# Registro de Testes de Endpoint

**Aluno:**  
**Grupo:**  

## Testes escritos

| # | Verbo e rota | Com token? | Status esperado | Verde ou vermelho? |
|---|---|---|---|---|
| 1 | POST /eventos | Não | 401 | Verde |
| 2 | GET /eventos/999999 | Não | 404 | Verde |
| 3 | GET /eventos/:idabc | Não | 400 | Preencher após executar |

## Resultado

**Linha "Tests:" da saída do npm run test:endpoint:**

Preencher com o resultado real do terminal.

## Defeito encontrado

**Teste:** GET /eventos/:idabc

**Esperado:** 400 — ID inválido.

**Obtido:** Preencher com o status que apareceu no terminal.

**Em qual aula esse mesmo defeito já tinha aparecido, e como:**

Preencher conforme o conteúdo estudado anteriormente. Verifique se o defeito de validação de ID já havia sido observado em alguma aula anterior.
