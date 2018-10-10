import {articles} from '../collections'

const findArticleByTitle = async title => articles.find({'title': title}, {'_id': false})
const findArticleByAuthor = async author => articles.find({'author': author}, {'_id': false})
const findArticleByTag = async tag => articles.find({'tags': {'$in': [tag]}}, {'_id': false})
const insertArticles = async article => articles.insert(article)
const topArticlesByLikesCount = async () => articles.aggregate([
    {
        $sort:
            {
                likes: -1
            }
    }, {
        $limit: 10
    }]
)
const topArticlesByDate = async () => articles.aggregate([
    {
        $sort:
            {
                date: -1
            }
    }, {
        $limit: 10
    }]
)

export {findArticleByTitle, findArticleByAuthor, findArticleByTag, insertArticles, topArticlesByLikesCount, topArticlesByDate}
