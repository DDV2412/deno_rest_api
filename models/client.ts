import { Client } from "postgres";

const client = new Client({
  user: "deno_admin",
  password: "deno_admin",
  database: "deno_rest",
  hostname: "localhost",
});

export default client;
