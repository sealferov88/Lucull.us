const responseSuccess = (content, ctx) => {
    ctx.body = content
    ctx.type = 'json'
    ctx.status = 200
}

export default responseSuccess