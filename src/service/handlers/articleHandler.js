import Tag from '../../model/tag'
import CATEGORIES from '../../model/category'
import {getAuthorByName} from '../query/authorAggreagateService'
import {getTagByName} from '../query/tagAggregateService'
import {createTag} from "../command/commandExecutor";

const handlers = []
handlers.push(async article => {
    let authorName = article.author
    let author = await getAuthorByName(authorName)
    return new Promise(((resolve, reject) => {

        if (!author || !author.length) {
            reject(new Error(`${authorName} not found in store`))
        }
        resolve()
    }))

},
async article => {
    let category = article.category
    return new Promise((resolve, reject) => {
        if (!CATEGORIES.includes(category)) {
            reject(new Error(`There is no such category: ${category}`))
        }
        resolve()
    })

},
async article => {
    let tags = article.tags
    tags.forEach(async tagName => {
        if (tagName) {
            let result = await getTagByName(tagName)
            if (!result.length) {
                await createTag(new Tag(tagName))
            }
        }
    })
}, async article => {
    let content = article.content
    return new Promise((resolve, reject) => {
        if (content && content.length > 100000) {
            reject(new Error(`${article.name} exceeded symbols limit`))
        }
        resolve()
    })

})


const articleHandlers = async articleCommand => {
    for (let i = 0; i < handlers.length; i++) {
        await handlers[i](articleCommand)
    }
}

export default articleHandlers