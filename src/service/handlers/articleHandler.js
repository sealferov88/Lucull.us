import {findAuthorByName} from '../../db/services/authorDBService'
import {findTagByName, insertTags} from '../../db/services/tagDBService'
import Tag from '../../model/tag'
import Article from '../../model/article'

const handlers = []
handlers.push(async article => {
    let author = await findAuthorByName(article.author)
    if (!author || !author.length) {
        throw Error(`${article.author} not found in store`)
    }
},
async article => {
    console.log(article)
    let tags = article.tags
    tags.forEach( async tagName => {
        if (tagName) {
            let result = await findTagByName(tagName)
            if (!result.length) {
                await insertTags(new Tag(tagName))
            }
        }
    })
}, async article => {
    let content = article.content
    if (content && content.length > 100000) {
        throw Error(`${article.name} exceeded symbols limit`)
    }
})


const articleHandlers = async articleCommand => {
    handlers.forEach( async handler => {
        handler(articleCommand)
    })
    return new Promise(resolve => {
        resolve(new Article(articleCommand.title, articleCommand.author, articleCommand.content, articleCommand.tags))
    })
}

export default articleHandlers