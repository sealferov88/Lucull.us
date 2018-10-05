import ArticleDBService from '../db/services/articleDBService'
import responseSuccess from './model/response'
import responseNotFound from './exceptionHandling/model/responseNotFound'
import api from './router'


const articleAPI = api

articleAPI.get('/api/article/:title', async ctx => {
    ctx.compress = true
    let param = ctx.params.title
    let result = await ArticleDBService.findArticleByTitle(param)
    result.length ? responseSuccess(result, ctx) : responseNotFound(param, ctx)
})

articleAPI.get('/api/article/author/:author', async ctx => {
    let param = ctx.params.title
    let result = await ArticleDBService.findArticleByAuthor(param)
    !result.length ? responseNotFound(param, ctx) : responseSuccess(result, ctx)
})

articleAPI.get('/api/article/tag/:tag', async ctx => {
    let param = ctx.params.title
    let result = await ArticleDBService.findArticleByTag(param)
    result.length ? responseSuccess(result, ctx) : responseNotFound(param, ctx)
})

articleAPI.post('/api/article', async ctx => {
    ctx.body = await ArticleDBService.createArticles(ctx.request.body)
    ctx.type = 'json'
    ctx.status = 200
})


export default articleAPI