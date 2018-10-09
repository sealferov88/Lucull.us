import api from '../../router'
import {getTagByName, getTagTop} from '../../../service/query/tagAggregateService'
import responseSuccess from '../../model/response'
import responseNotFound from '../../exceptionHandling/model/responseNotFound'


const tagQueryAPI = api


tagQueryAPI.get('/api/tag/name/:name', async ctx => {
    let param = ctx.params.name
    let tag = await getTagByName(param)
    tag.length ? responseSuccess(tag, ctx) : responseNotFound(param, ctx)
})

tagQueryAPI.get('/api/tag/top', async ctx => {
    ctx.body = await getTagTop()
})

export default tagQueryAPI
