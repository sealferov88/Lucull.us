import validator, {array, object, string} from 'koa-context-validator'
import articleQueryAPI from '../query/articleQueryAPI'
import api from '../../router'
import {createArticle} from '../../../service/command/commandExecutor'
import responseGenerator from '../service/responseGenerator'


const articleCommandAPI = api

articleQueryAPI.post('/article', validator({
    body: object().keys({
        title: string().required(),
        author: string().required(),
        category: string().required(),
        content: string().required(),
        tags: array().required()
    }),
}), async ctx => {
    let result = await createArticle(ctx.request.body)
    responseGenerator(ctx, result)
})

export default articleCommandAPI