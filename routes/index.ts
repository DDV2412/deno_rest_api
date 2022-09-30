import { Router } from "oak";
import Journal from "../controllers/journal.ts";

class Routes {
  router: Router;
  constructor() {
    this.router = new Router();

    /**
     * Implementation router
     */

    this.router.get("/", Journal.findAll);
  }
}

export default new Routes().router;
