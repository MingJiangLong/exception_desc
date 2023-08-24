"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = __importDefault(require("./BaseError"));
/**
 * 用户数据异常
 */
class UserDataError extends BaseError_1.default {
    constructor(message) {
        super("用户输入数据错误", message !== null && message !== void 0 ? message : '用户输入数据错误');
    }
}
exports.default = UserDataError;
