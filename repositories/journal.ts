import journal from "../models/journal.ts";

class JournalRepository {
  journal: typeof journal;

  constructor() {
    this.journal = journal;
  }

  findAll = async () => {
    return await this.journal.findAll();
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
