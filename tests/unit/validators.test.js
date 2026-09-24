// 1. Importa as funções que vamos testar
const { isEmail, minLength } = require("../../src/helpers/validators");

// 2. describe = agrupa os testes de uma função
describe("validators.isEmail", () => {
    // 3. it = um caso de teste. O texto diz o que DEVERIA acontecer
    it("não retorna erro para um e-mail válido", () => {
        // Arrange — prepara
        const email = "ana@senai.br";
        // Act — executa
        const resultado = isEmail(email);
        // Assert — confere (nos validators, null = "sem erro")
        expect(resultado).toBeNull();
    });

    it("retorna mensagem de erro para e-mail sem @", () => {
        const resultado = isEmail("ana.senai.br");
        expect(resultado).toBe("E-mail inválido");
    });
});

// 2.3 Teste 3 — Caso de borda para minLength
describe("validators.minLength", () => {
    it("não retorna erro para um texto com o número de carateres exatamente igual ao mínimo", () => {
        // Arrange — prepara um texto de 3 letras ("Ana") e mínimo de 3
        const valor = "Ana";
        const minimo = 3;
        const nomeCampo = "Nome";

        // Act — executa a função
        const resultado = minLength(valor, minimo, nomeCampo);

        // Assert — como 3 letras satisfazem o mínimo de 3, não deve dar erro (null)
        expect(resultado).toBeNull();
    });
});