import client from "./client.ts";

class Journal {
  client: typeof client;

  constructor() {
    this.client = client;
  }
  findAll = async () => {
    const data = await this.client.queryArray(`select * from journals;`);

    return data.rows;
  };

  
}

export default new Journal();
