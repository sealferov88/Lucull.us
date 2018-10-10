import {articles} from '../collections'

const findArticleByTitle = async title => articles.find({'title': title})
const findArticleByAuthor = async author => articles.find({'author': author})
const findArticleByTag = async tag => articles.find({'tags': {'$in': [tag]}})
const insertArticles = async article => articles.insert(article)
const topArticlesByLikesCount = async () => articles.aggregate([
    {
        $sort:
            {
                likes: -1
            }
    }, {
        $limit: 5
    }]
)
const topArticlesByDate = async () => articles.aggregate([
    {
        $sort:
            {
                date: -1
            }
    }, {
        $limit: 5
    }]
)

export {findArticleByTitle, findArticleByAuthor, findArticleByTag, insertArticles, topArticlesByLikesCount, topArticlesByDate}
