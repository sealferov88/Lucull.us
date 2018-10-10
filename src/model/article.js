export default class Article {

    constructor(title, author, date, content, category, tags) {
        this.title = title
        this.author = author
        this.content = content
        this.tags = tags
        this.category = category
        this.likes = []
        this._date = date
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


    get _date() {
        return this.date
    }

    set _date(value) {
        this.date = value
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


    get _category() {
        return this.category
    }

    set _category(value) {
        this.category = value
    }

    get _likes() {
        return this.likes
    }

    set _likes(value) {
        this.likes = value
    }
}