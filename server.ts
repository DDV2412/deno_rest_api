import App from "./app.ts";

class Server extends App {
  hostname: string;
  port: number;

  constructor() {
    super();
    this.hostname = "localhost";
    this.port = 5000;

    this.app.addEventListener("listen", ({ secure = "http" }) => {
      console.log(
        `Listening on: ${secure ? "https://" : "http://"}${
          this.hostname ?? "localhost"
        }:${this.port}`
      );
    });
  }
  connection = async () => {
    await this.app.listen({ port: this.port });
  };
}

const app = new Server();
await app.connection();
