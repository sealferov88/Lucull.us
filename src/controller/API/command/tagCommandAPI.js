import api from '../../router'
import validator, {object, string} from 'koa-context-validator'
import {createTag} from '../../../service/command/commandExecutor'
import responseGenerator from '../service/responseGenerator'

const tagCommandAPI = api

tagCommandAPI.post('/tag', validator({
    body: object().keys({
        name: string().required()
    }),
}), async ctx => {
    let result = await createTag(ctx.body)
    responseGenerator(ctx, result)
})

export default tagCommandAPI