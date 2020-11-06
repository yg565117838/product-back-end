//依赖引入
const Router = require('koa-router')

//实列化对象
const router = new Router()

router.get('/',ctx=>{
    ctx.body='路由哈哈'
})

module.exports = router.routes()