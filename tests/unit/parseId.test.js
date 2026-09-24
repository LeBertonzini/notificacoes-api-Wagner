// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
  // Para testar ERRO, o expect recebe uma função: () => ...
  it("lança ValidationError quando o id não é número", () => {
    expect(() => parseId("abc")).toThrow(ValidationError);
  });

  // DESAFIO: Um id "12abc" NÃO deve ser aceito e deve lançar erro de validação
  it("lança ValidationError quando o id contém letras junto com números", () => {
    expect(() => parseId("12abc")).toThrow(ValidationError);
  });
});