import {findTagByName} from '../../db/services/tagDBService'


const getTagByName = async name => {
    return findTagByName(name)
}

export {getTagByName}