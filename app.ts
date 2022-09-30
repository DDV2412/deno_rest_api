import { Application, Context } from "oak";
import client from "./models/client.ts";

/**
 * import routes
 */

import routes from "./routes/index.ts";

/**
 * import Use Cases and Repositories
 */

import JournalRepository from "./repositories/journal.ts";
import JournalUseCase from "./usecases/journal.ts";

const JournalUC = new JournalUseCase(new JournalRepository());

class App {
  public app: Application;

  constructor() {
    this.app = new Application();

    client
      .connect()
      .then(() => {
        console.log("Connected");
      })
      .catch((err) => {
        console.log(err);
      });

    this.app.use(async (ctx: Context, next) => {
      ctx.state.JournalUC = JournalUC;

      await next();
    });

    this.app.use(routes.routes());
    this.app.use(routes.allowedMethods());
  }
}

export default App;
