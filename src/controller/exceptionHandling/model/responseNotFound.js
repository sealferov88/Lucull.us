const responseNotFound = (params, ctx) => {
    ctx.throw(404,  'NOT FOUND')
}

export default responseNotFound