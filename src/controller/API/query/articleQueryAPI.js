
import responseSuccess from '../../model/response'
import responseNotFound from '../../exceptionHandling/model/responseNotFound'
import api from '../../router'
import {getArticleByAuthor, getArticleByTag, getArticleByTitle} from '../../../service/query/articleAggregateService'


const articleQueryAPI = api

articleQueryAPI.get('/api/article/:title', async ctx => {
    ctx.compress = true
    let param = ctx.params.title
    let result = await getArticleByTitle(param)
    result.length ? responseSuccess(result, ctx) : responseNotFound(param, ctx)
})

articleQueryAPI.get('/api/article/author/:author', async ctx => {
    let param = ctx.params.author
    let result = getArticleByAuthor(param)
    !result.length ? responseNotFound(param, ctx) : responseSuccess(result, ctx)
})

articleQueryAPI.get('/api/article/tag/:tag', async ctx => {
    let param = ctx.params.tag
    let result = await getArticleByTag(param)
    result.length ? responseSuccess(result, ctx) : responseNotFound(param, ctx)
})




export default articleQueryAPI