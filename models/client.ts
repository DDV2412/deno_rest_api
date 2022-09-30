import { Client } from "postgres";

const client = new Client({
  user: "ipmugo_admin",
  password: "ipmugo_admin",
  database: "ipmugo_library",
  hostname: "localhost",
});

export default client;
