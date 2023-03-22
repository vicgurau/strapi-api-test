module.exports = {
  routes : [
    {
      method: 'POST',
      path: '/custom',
      handler: 'article.customAction',
      config: {
        find:{
          auth: true,
        }
      }
    }
  ]
}
