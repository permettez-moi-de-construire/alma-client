"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlmaCardBrand = exports.AlmaCardFunding = exports.AlmaPaymentState = exports.AlmaInstallmentState = exports.AlmaLocale = exports.AlmaPaymentMethod = void 0;
var AlmaPaymentMethod;
(function (AlmaPaymentMethod) {
    AlmaPaymentMethod["CARD"] = "card";
    AlmaPaymentMethod["BANK_CREDIT"] = "bank_debit";
})(AlmaPaymentMethod = exports.AlmaPaymentMethod || (exports.AlmaPaymentMethod = {}));
var AlmaLocale;
(function (AlmaLocale) {
    AlmaLocale["FR"] = "fr";
    AlmaLocale["EN"] = "en";
})(AlmaLocale = exports.AlmaLocale || (exports.AlmaLocale = {}));
var AlmaInstallmentState;
(function (AlmaInstallmentState) {
    AlmaInstallmentState["PENDING"] = "pending";
    AlmaInstallmentState["PAID"] = "paid";
    AlmaInstallmentState["COVERED"] = "covered";
})(AlmaInstallmentState = exports.AlmaInstallmentState || (exports.AlmaInstallmentState = {}));
var AlmaPaymentState;
(function (AlmaPaymentState) {
    AlmaPaymentState["NOT_STARTED"] = "not_started";
    AlmaPaymentState["SCORED_NO"] = "scored_no";
    AlmaPaymentState["SCORED_YES"] = "scored_yes";
    AlmaPaymentState["SCORED_MAYBE"] = "scored_maybe";
    AlmaPaymentState["PAID"] = "paid";
    AlmaPaymentState["IN_PROGRESS"] = "in_progress";
})(AlmaPaymentState = exports.AlmaPaymentState || (exports.AlmaPaymentState = {}));
var AlmaCardFunding;
(function (AlmaCardFunding) {
    AlmaCardFunding["DEBIT"] = "debit";
    AlmaCardFunding["CREDIT"] = "credit";
    AlmaCardFunding["UNKNOWN"] = "unknown";
})(AlmaCardFunding = exports.AlmaCardFunding || (exports.AlmaCardFunding = {}));
var AlmaCardBrand;
(function (AlmaCardBrand) {
    AlmaCardBrand["VISA"] = "visa";
    AlmaCardBrand["MASTERCARD"] = "mastercard";
    AlmaCardBrand["AMERICAN_EXPRESS"] = "american express";
})(AlmaCardBrand = exports.AlmaCardBrand || (exports.AlmaCardBrand = {}));
