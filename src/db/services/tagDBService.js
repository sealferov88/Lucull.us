import {tags} from '../collections'


const findTagByName = name => tags.find({name: name})
const findTagById = id => tags.find({id: id})
const insertTags = tag => tags.insert(tag)
const sortTags = () => tags.aggregate([
    {
        $lookup:
            {
                from: 'likes',
                localField: 'name',
                foreignField: 'tags',
                as: 'top'
            }
    }, {  $project: {
        length: {'$size': top }
    }},  {$sort: {
        length: -1
    }}]
)
const upsert = tag => {
    console.log(tag)
    return tags.update({'name': tag.name}, tag, {upsert: true})
}

export {findTagByName, findTagById, insertTags, upsert, sortTags}
