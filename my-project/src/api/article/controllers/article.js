'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async customAction(ctx) {
    try{
     ctx.body = ctx.state.user
    } catch (err){
      ctx.body = err
    }
  },
  async find(ctx){
    ctx.query = { ...ctx.query, populate: 'author'}
    const { data, meta } = await super.find(ctx)
    meta.date = Date.now()
    return {data, meta}
  },
  async create(ctx) {
    ctx.request.body.data = { ...ctx.request.body.data, author: ctx.state.user}
    return super.create(ctx);
  }
}));

