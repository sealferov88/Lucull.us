import articleHandlers from '../handlers/articleHandler'
import {insertArticles} from '../../db/services/articleDBService'


const createArticle = async articleCommand => {
    let article = await articleHandlers(articleCommand)
    return await insertArticles(article)
}

export {createArticle}