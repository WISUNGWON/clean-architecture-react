export class NetworkError extends Error {
    statusCode?: number
    responseMessage?: string

    constructor(statusCode?: number, message?: string) {
        super()
        this.statusCode = statusCode
        this.responseMessage = message
    }
}