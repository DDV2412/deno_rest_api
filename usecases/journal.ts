// deno-lint-ignore-file
class JournalUseCase {
  journal: any;
  constructor(journalRepository: any) {
    this.journal = journalRepository;
  }
  findAll = async () => {
    return await this.journal.findAll();
  };
  findOne = async () => {
    return await this.journal.findOne();
  };
  create = async () => {
    return await this.journal.create();
  };
  update = async () => {
    return await this.journal.update();
  };
  delete = async () => {
    return await this.journal.delete();
  };
}

export default JournalUseCase;
