import db from './connect'

const articles = db.get('articles')
const tags = db.get('tags')

export {articles, tags}