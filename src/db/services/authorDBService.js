import { auhtors } from '../collections'

const findAuthorByName = async name => auhtors.find({ name: name})
const createAuthor = async author => auhtors.insert(author)

export {findAuthorByName, createAuthor}