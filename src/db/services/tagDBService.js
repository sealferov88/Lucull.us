import {tags} from '../collections'


const findTagByName = name => tags.find({name: name}, {'_id': false})
const insertTags = tag => tags.insert(tag)

const upsert = tag => {
    console.log(tag)
    return tags.update({'name': tag.name}, tag, {upsert: true})
}

export {findTagByName, insertTags, upsert}
