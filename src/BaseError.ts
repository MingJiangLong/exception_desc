export default class BaseError extends Error {

  moreMessage: {
    message: string
    [k: string]: any
  } = {
      message: ''
    }
  constructor(name: string);
  constructor(name: string, message: ErrorMessage);
  constructor(name: string, message?: ErrorMessage,) {
    super();
    this.name = name;
    this.formatMessage(message);
  }

  formatMessage(unKnownMessage?: ErrorMessage) {
    if (!unKnownMessage) return;
    if (typeof unKnownMessage === 'string') {
      this.message = unKnownMessage;
      this.moreMessage.message = unKnownMessage
      return
    }

    if (Object.prototype.toString.call(unKnownMessage) === '[object Object]') {
      this.message = unKnownMessage?.message;
      this.moreMessage = unKnownMessage;
    }
  }
}

export type ErrorMessage = string | {
  message: string
  [k: string]: any
}