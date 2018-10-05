import Koa from 'koa';
import articleAPI from './controller/articleAPI';
import config from './config';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import tagAPI from "./controller/tagAPI";


const app = new Koa()
    .use(cors())
    .use(async (ctx, next) => {
        ctx.state.collections = config.collections;
        ctx.state.authorizationHeader = `Key ${config.key}`;
        await next();
    })
    .use(bodyParser())
    .use(articleAPI.routes())
    .use(articleAPI.allowedMethods())
    .use(tagAPI.routes())
    .use(tagAPI.allowedMethods());

export default app;