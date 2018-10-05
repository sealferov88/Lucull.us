import { tags } from '../collections'


class TagDBService {

    static findTagByName(name) {
        return tags.find({name: name})
    }

    static findTagById(id) {
        return tags.find({id: id})
    }

    static createTags(tag) {
        return tags.insert(tag)
    }
}

export default TagDBService
