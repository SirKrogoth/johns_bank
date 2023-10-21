"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountStatus = void 0;
var accountStatus;
(function (accountStatus) {
    accountStatus[accountStatus["CREATED"] = 100] = "CREATED";
    accountStatus[accountStatus["ACTIVE"] = 200] = "ACTIVE";
    accountStatus[accountStatus["SUSPENDED"] = 300] = "SUSPENDED";
    accountStatus[accountStatus["REMOVED"] = 400] = "REMOVED";
})(accountStatus || (exports.accountStatus = accountStatus = {}));
