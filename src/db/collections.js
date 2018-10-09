import db from './connect'

const articles = db.get('articles')
const tags = db.get('tags')
const auhtors = db.get('authors')

export {articles, tags, auhtors}