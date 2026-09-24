# Registro de Testes Unitários

Aluno: Seu Nome
Grupo: Nome do Seu Grupo
Data: 24/09/2026

## Testes escritos

| # | Arquivo | O que o teste verifica | Tipo |
|---|---|---|---|
| 1 | tests/unit/validators.test.js | Não retorna erro para um e-mail válido | sucesso |
| 2 | tests/unit/validators.test.js | Retorna mensagem de erro para e-mail sem @ | falha |
| 3 | tests/unit/validators.test.js | Aceita valor com a quantidade exata de carateres mínimos | borda |
| 4 | tests/unit/parseId.test.js | Lança ValidationError quando o ID contém letras ("12abc") | falha |

## Resultado

Passaram: 5
Falharam: 1

## Defeito encontrado

Teste: parseId com ID "12abc"
Esperado: Lançar ValidationError ao receber letras misturadas com números
Obtido: A função aceitou o ID e não lançou erro

## Cobertura

% Lines da linha "helpers": 55.55%
Em uma frase, o que esse número significa: Significa que 55.55% das linhas de código presentes nos ficheiros da pasta helpers foram executadas pelos testes unitários criados.