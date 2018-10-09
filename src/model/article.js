export default class Article {

    constructor(title, author, content, tags) {
        this.title = title
        this.author = author
        this.content = content
        this.tags = tags
    }

    get _title() {
        return this.title
    }


    set _title(value) {
        this.title = value
    }

    get _author() {
        return this.author
    }

    set _author(value) {
        this.author = value
    }

    get _content() {
        return this.content
    }

    set _content(value) {
        this.content = value
    }

    get _tags() {
        return this.tags
    }

    set _tags(value) {
        this.tags = value
    }
}