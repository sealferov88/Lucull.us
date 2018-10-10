import articleHandlers from '../handlers/articleHandler'
import {insertArticles} from '../../db/services/articleDBService'
import Article from '../../model/article'
import moment from 'moment'
import {insertTags} from '../../db/services/tagDBService'
import Tag from '../../model/tag'
import {insertAuthor} from '../../db/services/authorDBService'


const createArticle = async articleCommand => {
    await articleHandlers(articleCommand)
    return insertArticles(new Article(articleCommand.title,
        articleCommand.author,
        moment().toDate(),
        articleCommand.content,
        articleCommand.category,
        articleCommand.tags))
}

const createTag = async tag => {
    return insertTags(new Tag(tag.name))
}

const createAuthor = async author => {
    return insertAuthor(author)
}

export {createArticle, createTag, createAuthor}