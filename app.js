require('dotenv').config()
const Koa = require('koa');
const path = require('path')
const Pug = require('koa-pug')
const router = require('@koa/router')();
const app = module.exports = new Koa();
const port = process.env.PORT || 3000;

const pug = new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app: app
})

// Configure routes

router
    .get('/', async ctx => await ctx.render('dashboard'))

app.use(router.routes());

// Start Koa app

if (!module.parent) {
    app.listen(port)
        .on("listening", () => console.log(`Server started: http://localhost:${port}`))
}



