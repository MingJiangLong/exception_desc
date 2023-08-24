import BaseError, { ErrorMessage } from "./BaseError";
/**
 * 用户数据异常
 */
export default class UserDataError extends BaseError {
    constructor(message?: ErrorMessage);
}
