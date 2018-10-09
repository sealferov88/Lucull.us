import { articles } from '../collections'

const findArticleByTitle = async title => articles.find({'title': title})
const findArticleByAuthor = async author => articles.find({'author': author})
const findArticleByTag = async tag => articles.find({'tags': {'$in': [tag]}})
const insertArticles = async article => articles.insert(article)


export {findArticleByTitle, findArticleByAuthor, findArticleByTag, insertArticles}
