import api from '../../router'
import {
    getArticleByAuthor,
    getArticleByTag,
    getArticleByTitle, getTopArticlesByDate,
    getTopArticlesByLikesCount
} from '../../../service/query/articleAggregateService'
import responseGenerator from '../service/responseGenerator'


const articleQueryAPI = api

articleQueryAPI.get('/article/title/:title', async ctx => {
    ctx.compress = true
    let param = ctx.params.title
    let result = await getArticleByTitle(param)
    responseGenerator(ctx, result)
})

articleQueryAPI.get('/api/article/author/:author', async ctx => {
    let param = ctx.params.author
    let result = getArticleByAuthor(param)
    responseGenerator(ctx, result)
})

articleQueryAPI.get('/api/article/tag/:tag', async ctx => {
    let param = ctx.params.tag
    let result = await getArticleByTag(param)
    responseGenerator(ctx, result)
})

articleQueryAPI.get('/api/article/top', async ctx => {
    let result = await getTopArticlesByLikesCount()
    responseGenerator(ctx, result)
})

articleQueryAPI.get('/api/article/recent', async ctx => {
    let result = await getTopArticlesByDate()
    responseGenerator(ctx, result)
})


export default articleQueryAPI