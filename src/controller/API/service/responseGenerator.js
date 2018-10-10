import responseSuccess from '../../model/response'
import responseNotFound from '../../model/responseNotFound'


const generateResponse = (ctx, result) => {
    result || result.length ? responseSuccess(result, ctx) : responseNotFound(ctx)
}

export default generateResponse