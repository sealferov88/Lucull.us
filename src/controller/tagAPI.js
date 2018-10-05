import responseSuccess from './model/response'
import responseNotFound from './exceptionHandling/model/responseNotFound'
import TagDBService from '../db/services/tagDBService'
import api from './router'


const tagAPI = api


tagAPI.get('/api/tag/name/:name', async ctx => {
    let param = ctx.params.name
    let result = await TagDBService.findTagByName(param)
    result.length ? responseSuccess(result, ctx) : responseNotFound(param, ctx)
})

tagAPI.get('/api/tag/id/:id', async ctx => {
    let param = ctx.params.name
    let result = await TagDBService.findTagById(param)
    result.length ? responseSuccess(result, ctx) : responseNotFound(param, ctx)
})

tagAPI.post('/api/tag', async ctx => {
    ctx.body = await TagDBService.createTags(ctx.request.body)
    ctx.type = 'json'
    ctx.status = 200
})

export default tagAPI