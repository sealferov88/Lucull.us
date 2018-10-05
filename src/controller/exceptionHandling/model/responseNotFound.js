const responseNotFound = (params, ctx) => {
    ctx.throw(400,  'NOT FOUND')
}

export default responseNotFound