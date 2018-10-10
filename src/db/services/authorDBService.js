import { auhtors } from '../collections'

const findAuthorByName = async name => auhtors.find({ name: name}, {'_id': false})
const insertAuthor = async author => auhtors.insert(author)

export {findAuthorByName, insertAuthor}