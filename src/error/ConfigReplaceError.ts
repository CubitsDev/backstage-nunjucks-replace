export class ConfigReplaceError extends Error {
    message: string;
    wrappedError: Error;

    constructor({message, wrappedError}: {message: string, wrappedError: Error}) {
        super();
        this.message = message
        this.wrappedError = wrappedError
    }
}