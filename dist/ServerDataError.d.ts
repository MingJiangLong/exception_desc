import BaseError, { ErrorMessage } from "./BaseError";
/**
 * 服务端数据异常
 */
export default class ServerDataError extends BaseError {
    constructor(message?: ErrorMessage);
}
