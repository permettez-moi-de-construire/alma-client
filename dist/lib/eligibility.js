"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEligible = exports.getPaymentEligibility = void 0;
const _1 = require("./");
const getPaymentEligibility = (almaAxiosClient) => async (eligibilityCheckPayload) => (await almaAxiosClient.post(`${_1.ALMA_HTTP_METHODS.PAYMENTS}/${_1.ALMA_HTTP_METHODS.ELIGIBILITY}`, eligibilityCheckPayload));
exports.getPaymentEligibility = getPaymentEligibility;
const isEligible = (eligibility) => (eligibility.eligible);
exports.isEligible = isEligible;
