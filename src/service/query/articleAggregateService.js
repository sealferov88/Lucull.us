import {
    findArticleByAuthor,
    findArticleByTag,
    findArticleByTitle, topArticlesByDate, topArticlesByLikesCount
} from '../../db/services/articleDBService'


const getArticleByTitle = async title => {
    return findArticleByTitle(title)
}

const getArticleByAuthor = async authorName => {
    return findArticleByAuthor(authorName)
}

const getArticleByTag = async tag => {
    return findArticleByTag(tag)
}

const getTopArticlesByLikesCount = async () => {
    return topArticlesByLikesCount()
}

const getTopArticlesByDate = async () => {
    return topArticlesByDate()
}

export {getArticleByTitle, getArticleByAuthor, getArticleByTag, getTopArticlesByLikesCount, getTopArticlesByDate}