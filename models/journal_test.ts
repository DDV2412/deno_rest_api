import { assert } from "https://deno.land/std@0.158.0/testing/asserts.ts";

class Journal {
  findAll = async () => {
    const data = await { rows: [] };

    return data.rows;
  };
}

const mockJournal = new Journal();

Deno.test("Find All Journal", async () => {
  const data = await mockJournal.findAll();
  assert(data);
});
