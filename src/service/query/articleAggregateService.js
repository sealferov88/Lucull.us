import {
    findArticleByAuthor,
    findArticleByTag,
    findArticleByTitle
} from '../../db/services/articleDBService'


const getArticleByTitle = async title => {
    return await findArticleByTitle(title)
}

const getArticleByAuthor = async authorName => {
    return await findArticleByAuthor(authorName)
}

const getArticleByTag = async tag => {
    return findArticleByTag(tag)
}

export {getArticleByTitle, getArticleByAuthor, getArticleByTag}