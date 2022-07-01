import App from "./App";

(async () => {
  const app = new App(3000);
  await app.listen();
})();
