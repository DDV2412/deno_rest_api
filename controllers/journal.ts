import { Context } from "oak";
class JournalController {
  findAll = async (ctx: Context) => {
    let data = await ctx.state.JournalUC.findAll();

    if (data == null) {
      data = [];
    }

    ctx.response.body = { data: data };
  };
}

export default new JournalController();
