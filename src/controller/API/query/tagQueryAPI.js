import api from '../../router'
import {getTagByName} from '../../../service/query/tagAggregateService'
import responseGenerator from '../service/responseGenerator'


const tagQueryAPI = api


tagQueryAPI.get('/tag/name/:name', async ctx => {
    let param = ctx.params.name
    let result = await getTagByName(param)
    responseGenerator(ctx, result)
})

export default tagQueryAPI
