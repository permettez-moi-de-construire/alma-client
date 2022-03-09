"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALMA_HTTP_METHODS = exports.getClient = void 0;
const axios_1 = __importDefault(require("axios"));
var ALMA_HTTP_METHODS;
(function (ALMA_HTTP_METHODS) {
    ALMA_HTTP_METHODS["PAYMENTS"] = "payments";
    ALMA_HTTP_METHODS["ELIGIBILITY"] = "eligibility";
    ALMA_HTTP_METHODS["REFUND"] = "refunds";
})(ALMA_HTTP_METHODS || (ALMA_HTTP_METHODS = {}));
exports.ALMA_HTTP_METHODS = ALMA_HTTP_METHODS;
const defaultEndpoint = 'https://api.getalma.eu';
const getClient = (apiKey, endpoint = defaultEndpoint) => axios_1.default.create({
    baseURL: `${endpoint}/v1`,
    headers: {
        Authorization: `Alma-Auth ${apiKey}`
    }
});
exports.getClient = getClient;
__exportStar(require("./eligibility"), exports);
__exportStar(require("./payment"), exports);
__exportStar(require("./refund"), exports);
__exportStar(require("./helpers"), exports);
