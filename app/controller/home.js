'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.nj', {
      ctx: {
        t: 11,
        b: 22,
      },
    });
  }
}

module.exports = HomeController;
