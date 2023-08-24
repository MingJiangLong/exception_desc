import BaseError, { ErrorMessage } from "./BaseError";

/**
 * 服务端业务异常
 */
export default class ServerBusinessError extends BaseError {
  constructor(message?: ErrorMessage) {
    super("服务端业务异常", message ?? '服务端业务异常');
  }
}