import request from "supertest";
import App from "../../src/App";

const app = new App(6000).server;

describe("GET /:items", () => {
  const queries = [{ q: "teclados" }, { q: "" }, {}];
  describe("Given a { q } param", () => {
    test("should respond with status 200", async () => {
      const response = await request(app)
        .get("/api/items")
        .query({ q: queries[0] })
        .send();

      expect(response.status).toBe(200);
    });

    test("should respond json containing properties", async () => {
      const response = await request(app)
        .get("/api/items")
        .query({ q: queries[0] })
        .send();

      expect(response.body.categories).toBeDefined();
      expect(response.body.author).toBeDefined();
      expect(response.body.items).toBeDefined();
      expect(response.body.items.length).toBe(4);
    });
  });

  describe("When { q } param is missing or empty", () => {
    test("should respond with status 200", async () => {
      queries.shift();

      for (const param of queries) {
        const response = await request(app)
          .get("/api/items")
          .query(param)
          .send();

        expect(response.status).toBe(400);
      }
    });
  });
});

describe("GET /items/:id", () => {
  const params = [{ id: "MLA1130612038" }, { id: "XXXXXXXXXXXXX" }, { id: "" }];
  describe("Given a { id } param", () => {
    test("should respond with status 200", async () => {
      const response = await request(app)
        .get(`/api/items/${params[0].id}`)
        .send();

      expect(response.status).toBe(200);
    });

    test("should respond json containing properties", async () => {
      const response = await request(app)
        .get(`/api/items/${params[0].id}`)
        .send();

      expect(response.body.author).toBeDefined();
      expect(response.body.item).toBeDefined();
    });
  });

  describe("When { id } param is missing", () => {
    test("should respond with status 200", async () => {
      params.shift();

      for (const id of params) {
        const response = await request(app).get(`/api/items/${id}`).send();

        expect(response.status).toBe(400);
      }
    });
  });
});
