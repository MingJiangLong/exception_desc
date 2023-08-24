"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(name, message) {
        super();
        this.moreMessage = {
            message: ''
        };
        this.name = name;
        this.formatMessage(message);
    }
    formatMessage(unKnownMessage) {
        if (!unKnownMessage)
            return;
        if (typeof unKnownMessage === 'string') {
            this.message = unKnownMessage;
            this.moreMessage.message = unKnownMessage;
            return;
        }
        if (Object.prototype.toString.call(unKnownMessage) === '[object Object]') {
            this.message = unKnownMessage === null || unKnownMessage === void 0 ? void 0 : unKnownMessage.message;
            this.moreMessage = unKnownMessage;
        }
    }
}
exports.default = BaseError;
