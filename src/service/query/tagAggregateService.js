import {findTagByName, sortTags} from '../../db/services/tagDBService'


const getTagByName = async name => {
    return findTagByName(name)
}

const getTagTop = async () => {
    console.log('Y')
    console.log(await sortTags())
    return sortTags()
}

export {getTagByName, getTagTop}