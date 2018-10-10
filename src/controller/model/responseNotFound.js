const responseNotFound = (ctx) => {
    ctx.throw(404,  'NOT FOUND')
}

export default responseNotFound