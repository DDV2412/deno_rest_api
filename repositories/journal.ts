import client from "../models/client.ts";

class JournalRepository {
  client: typeof client;

  constructor() {
    this.client = client;
  }
  findAll = () => {
    return null;
  };
  findOne = () => {
    return null;
  };
  create = () => {
    return null;
  };
  update = () => {
    return null;
  };
  delete = () => {
    return null;
  };
}

export default JournalRepository;
