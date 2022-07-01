import App from "../src/App";

describe("SERVER", () => {
  test("Should start server", async () => {
    const port = 6000;
    const app = new App(port);

    expect(app.server.settings.port).toBe(port);
  });
});
