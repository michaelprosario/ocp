"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreatmentBase_1 = require("./TreatmentBase");
const ConditionEnum_1 = require("../ConditionEnum");
class ColdTreatment extends TreatmentBase_1.TreatmentBase {
    matchesCondition(condition) {
        return condition === ConditionEnum_1.ConditionEnum.Cold;
    }
    getTreatmentFile() {
        return "coldTreatment.json";
    }
}
exports.ColdTreatment = ColdTreatment;
//# sourceMappingURL=ColdTreatment.js.map