require('dotenv').config()
const Koa = require('koa');
const serve = require('koa-static');
const path = require('path')
const Pug = require('koa-pug')
const router = require('@koa/router')();
const app = module.exports = new Koa();
const port = process.env.PORT || 3000;

const pug = new Pug({
    viewPath: path.resolve(__dirname, './views'),
    app: app
})

app.use(serve(__dirname + '/images'));

// Configure routes

router
    .get('/', ctx => ctx.render('dashboard'))
    .get('/person', ctx => ctx.render('person'))
    .get('/project', ctx => ctx.render('project'))
    .get('/client', ctx => ctx.render('client'))
    .get('/personAdd', ctx => ctx.render('personAdd'))
    .get('/projectAdd', ctx => ctx.render('projectAdd'))
    .get('/clientAdd', ctx => ctx.render('clientAdd'))

app.use(router.routes());

// Start Koa app

if (!module.parent) {
    app.listen(port)
        .on("listening", () => console.log(`Server started: http://localhost:${port}`))
}



