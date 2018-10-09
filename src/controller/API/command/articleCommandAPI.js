import validator, {array, object, string} from 'koa-context-validator'
import articleQueryAPI from '../query/articleQueryAPI'
import api from '../../router'
import {createArticle} from '../../../service/command/commandExecutor'


const articleCommandAPI = api

articleQueryAPI.post('/api/article', validator({
    body: object().keys({
        title: string().required(),
        author: string().required(),
        content: string().required(),
        tags: array().required()
    }),
}), async ctx => {
    ctx.body = await createArticle(ctx.request.body)
    ctx.type = 'json'
    ctx.status = 200
})

export default articleCommandAPI