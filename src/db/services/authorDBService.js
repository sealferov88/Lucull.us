import { auhtors } from '../collections'

const findAuthorByName = async name => auhtors.find({ name: name})
const insertAuthor = async author => auhtors.insert(author)

export {findAuthorByName, insertAuthor}