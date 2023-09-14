export default class EmptyResponseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}