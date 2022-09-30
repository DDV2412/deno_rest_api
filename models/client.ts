import { Client } from "postgres";

const client = new Client({
  user: "postgres",
  password: "123456",
  database: "postgres",
  hostname: "localhost",
});

export default client;
