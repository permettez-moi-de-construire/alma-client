"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefund = void 0;
const _1 = require("./");
const createRefund = (almaAxiosClient) => async (paymentId, refundPayload = {}) => (await almaAxiosClient.post(`${_1.ALMA_HTTP_METHODS.PAYMENTS}/${paymentId}/${_1.ALMA_HTTP_METHODS.REFUND}`, refundPayload));
exports.createRefund = createRefund;
