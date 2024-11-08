const router = require('./router');
const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log('X-Response-Time', ms);
});
  app.use(router);

app.use(async ctx => {
    console.log('ctx=', ctx);
    ctx.body = 'hello word';
})
// error 
app.on('error', err => {
    console.log('server error', err)
});

app.listen(3000);