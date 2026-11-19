
 // Teste de ENDPOINT: entra pela "porta da frente" da API,
 // com uma requisição HTTP de verdade.

const request = require("supertest");
const app = require("../../src/app");
const { sequelize, Evento } = require("../../src/models");
const limparBanco = require("../helpers/limparBanco");
const obterToken = require("../helpers/obterToken");

beforeEach(async () => {
  await limparBanco();
});

afterAll(async () => {
  await sequelize.close();
});

describe("GET /eventos (rota pública)", () => {
  it("responde 200 com a lista de eventos vazia", async () => {
    // Act: faz a requisição
    const resposta = await request(app).get("/eventos");

    // Assert
    expect(resposta.status).toBe(200);
    expect(resposta.body.dados).toEqual([]);
    expect(resposta.body.total).toBe(0);
  });

  // Parte 4 — Teste 2
  it("responde 404 quando o evento não existe", async () => {
    const resposta = await request(app).get("/eventos/999999");

    expect(resposta.status).toBe(404);
    expect(resposta.body.erro.mensagem).toBe("Evento não encontrado(a)");
  });

  // Parte 5 — Teste 3: o desafio
  it("responde 400 quando o ID do evento é inválido", async () => {
    // Arrange: cria um evento no banco
    const evento = await Evento.create({
      nome: "Evento de Teste",
      data: "2026-11-20"
    });

    // Act: envia o ID com letras no final
    const resposta = await request(app)
      .get(`/eventos/${evento.id}abc`);

    // Assert
    expect(resposta.status).toBe(400);
  });
});

describe("POST /eventos (rota protegida)", () => {
  it("responde 401 quando não manda o token", async () => {
    // Arrange
    const evento = {
      nome: "Semana de Tecnologia",
      data: "2026-11-20"
    };

    // Act
    const resposta = await request(app)
      .post("/eventos")
      .send(evento);

    // Assert
    expect(resposta.status).toBe(401);
    expect(resposta.body.erro.mensagem).toBe("Token não fornecido");
  });

  it("responde 201 quando manda um token válido", async () => {
    // Arrange
    const token = await obterToken();
    const evento = {
      nome: "Semana de Tecnologia",
      data: "2026-11-20"
    };

    // Act
    const resposta = await request(app)
      .post("/eventos")
      .set("Authorization", `Bearer ${token}`)
      .send(evento);

    // Assert
    expect(resposta.status).toBe(201);
    console.log(resposta.body);
  });
});
