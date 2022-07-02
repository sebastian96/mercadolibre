import App from "./App";

(async () => {
  const app = new App(4000);
  await app.listen();
})();
