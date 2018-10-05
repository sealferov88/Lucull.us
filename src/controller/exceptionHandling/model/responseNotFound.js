const responseNotFound = (params, ctx) => {
    ctx.body = { messageCode: 'NOT_FOUND' };
    ctx.type = 'json';
    ctx.status = 404;
};

export default responseNotFound;