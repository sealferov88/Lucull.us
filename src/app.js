import Koa from 'koa'
import articleAPI from './controller/articleAPI'
import config from './config'
import bodyParser from 'koa-bodyparser'
import cors from 'kcors'
import tagAPI from './controller/tagAPI'
import cache from 'koa-cache-lite'
import createLogger from 'concurrency-logger'


const logger = createLogger()

cache.configure({
    routes: {

        '/api/article/:title': {
            timeout: 1000,
            minimumSize: 1
        },
        '/api/article/author/:author': 1000
    }
}, {
    debug: true
})


const app = new Koa()
    .use(cors())
    .use(logger)
    .use(cache.middleware())
    .use(async (ctx, next) => {
        ctx.state.collections = config.collections
        ctx.state.authorizationHeader = `Key ${config.key}`
        await next()
    })
    .use(bodyParser())
    .use(articleAPI.routes())
    .use(articleAPI.allowedMethods())
    .use(tagAPI.routes())
    .use(tagAPI.allowedMethods())

export default app