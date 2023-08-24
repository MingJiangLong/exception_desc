"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = __importDefault(require("./BaseError"));
/**
 * 服务端数据异常
 */
class ServerDataError extends BaseError_1.default {
    constructor(message) {
        super("服务端返回数据异常", message !== null && message !== void 0 ? message : '服务端返回数据异常');
    }
}
exports.default = ServerDataError;
