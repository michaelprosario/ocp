"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionEnum_1 = require("../ConditionEnum");
const TreatmentBase_1 = require("./TreatmentBase");
class Covid19Treatment extends TreatmentBase_1.TreatmentBase {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    matchesCondition(condition) {
        // notify
        this.notificationService.notify();
        return condition === ConditionEnum_1.ConditionEnum.COVID19;
    }
    getTreatmentFile() {
        // do notification stuff 
        return 'covidtreatment.json';
    }
}
exports.Covid19Treatment = Covid19Treatment;
//# sourceMappingURL=Covid19Treatment.js.map