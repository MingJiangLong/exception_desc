import BaseError, { ErrorMessage } from "./BaseError";

/**
 * 服务端数据异常
 */
export default class ServerDataError extends BaseError {
  constructor(message?: ErrorMessage) {
    super("服务端返回数据异常", message ?? '服务端返回数据异常');
  }
}