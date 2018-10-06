export default class Article {

    constructor(title, author, content, tags) {
        this._title = title
        this._author = author
        this._content = content
        this._tags = tags
    }


    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get author() {
        return this._author
    }

    set author(value) {
        this._author = value
    }

    get content() {
        return this._content
    }

    set content(value) {
        this._content = value
    }

    get tags() {
        return this._tags
    }

    set tags(value) {
        this._tags = value
    }
}