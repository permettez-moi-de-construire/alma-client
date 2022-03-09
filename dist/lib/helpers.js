"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToAlmaTimestamp = exports.almaTimestampToDate = exports.centsToEurs = exports.eurosToCents = void 0;
exports.eurosToCents = (eurs) => Math.round(eurs * 100);
exports.centsToEurs = (cents) => cents / 100;
exports.almaTimestampToDate = (almaTimestamp) => new Date(almaTimestamp * 1000);
exports.dateToAlmaTimestamp = (date) => Math.round(date.getTime() / 1000);
