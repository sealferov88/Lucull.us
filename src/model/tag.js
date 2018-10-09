export default class Tag {


    constructor(name) {
        this.name = name
    }


    get _name() {
        return this.name
    }

    set _name(value) {
        this.name = value
    }
}