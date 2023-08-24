export default class BaseError extends Error {
    moreMessage: {
        message: string;
        [k: string]: any;
    };
    constructor(name: string);
    constructor(name: string, message: ErrorMessage);
    formatMessage(unKnownMessage?: ErrorMessage): void;
}
export type ErrorMessage = string | {
    message: string;
    [k: string]: any;
};
