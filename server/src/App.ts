import express, { Application } from "express";
import cors from "cors";
import routesProducts from "./routes/products";

class App {
  server: Application;

  constructor(private port?: number | string) {
    this.server = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.server.set("port", this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes() {
    this.server.use("/api", routesProducts);
  }

  async listen(): Promise<void> {
    await this.server.listen(this.server.get("port"));
    console.log(`Server on port ${this.server.get("port")}`);
  }
}

export default App;
