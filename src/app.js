import Koa from 'koa'
import articleQueryAPI from './controller/API/query/articleQueryAPI'
import error from 'koa-json-error'
import articleCommandAPI from './controller/API/command/articleCommandAPI'
//import config from './config'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
//import _ from 'lodash'
import compress from  'koa-compress'
import cors from 'kcors'
import cache from 'koa-cache-lite'
import createLogger from 'concurrency-logger'
import tagQueryAPI from './controller/API/query/tagQueryAPI'
import tagCommandAPI from './controller/API/command/tagCommandAPI'



const logger = createLogger()

cache.configure({
    routes: {

        '/api/article/title/:title': {
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
    .use(compress({
        filter:  content_type => {
            return /json/i.test(content_type)
        },
        threshold: 256,
        flush: require('zlib').Z_SYNC_FLUSH
    }))
    .use(error((err) => {
        let name = err.name
        let message = err.message
        let status =  name && name === 'ValidationError' ? 400 : err.status
        return {
            status: status,
            message: message,
            stackTrace: err.stackTrace
        }
    }
    ))
    .use(logger)
//   .use(cache.middleware())
    /*.use(async (ctx, next) => {
        ctx.state.collections = config.collections
        ctx.state.authorizationHeader = `Key ${config.key}`
        await next()
    })*/
    .use(helmet())
    .use(bodyParser())
    .use(articleQueryAPI.routes())
    .use(articleQueryAPI.allowedMethods())
    .use(articleCommandAPI.routes())
    .use(articleCommandAPI.allowedMethods())
    .use(tagQueryAPI.routes())
    .use(tagQueryAPI.allowedMethods())
    .use(tagCommandAPI.routes())
    .use(tagCommandAPI.allowedMethods())

export default app