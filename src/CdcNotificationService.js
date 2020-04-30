"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleLogger_1 = require("./ConsoleLogger");
class CdcNotificationService {
    constructor() {
        this.Logger = new ConsoleLogger_1.ConsoleLogger();
    }
    publicNotifySuspectedCOVID19Case() {
        //This does not actually notify anyone, but if this were real it would here!
        this.Logger.Log('Succesfully Notified CDC of suspected COVID-19 Diagnostic.');
    }
}
exports.CdcNotificationService = CdcNotificationService;
//# sourceMappingURL=CdcNotificationService.js.map