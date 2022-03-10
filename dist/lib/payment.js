"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPayments = exports.findPayment = exports.createPayment = void 0;
const _1 = require("./");
const createPayment = (almaAxiosClient) => async (paymentPayload) => (await almaAxiosClient.post(_1.ALMA_HTTP_METHODS.PAYMENTS, paymentPayload));
exports.createPayment = createPayment;
const findPayment = (almaAxiosClient) => async (paymentId) => (await almaAxiosClient.get(`${_1.ALMA_HTTP_METHODS.PAYMENTS}/${paymentId}`));
exports.findPayment = findPayment;
const listPayments = (almaAxiosClient) => async (filters = {}, options = {}) => (await almaAxiosClient.get(`${_1.ALMA_HTTP_METHODS.PAYMENTS}`, {
    params: {
        ...filters,
        ...options
    }
}));
exports.listPayments = listPayments;
