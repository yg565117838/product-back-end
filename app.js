//依赖引入
const Koa = require('koa'),
    Router = require('koa-router'),
    http = require('http'),
    admin = require('./routes/admin')

//实列化对象
const app = new Koa(),
    router = new Router(),
    server = http.createServer(app.callback())

//首页
router.get('/',ctx=>{
    ctx.body = '欢迎来到产品管理系统后台'
})

//后台管理系统
router.use('/admin',admin)

//配置路由
app.use(router.routes()).use(router.allowedMethods())

//监听服务器
server.listen(3030, () => {
    console.log('run at*3030')
})