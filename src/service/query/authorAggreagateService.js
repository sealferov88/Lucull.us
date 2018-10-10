import {findAuthorByName} from '../../db/services/authorDBService'


const getAuthorByName = async name => {
    return findAuthorByName(name)
}

export {getAuthorByName}