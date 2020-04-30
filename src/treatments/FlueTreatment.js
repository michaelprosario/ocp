"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreatmentBase_1 = require("./TreatmentBase");
const ConditionEnum_1 = require("../ConditionEnum");
class FlueTreatment extends TreatmentBase_1.TreatmentBase {
    matchesCondition(condition) {
        return condition === ConditionEnum_1.ConditionEnum.Flu;
    }
    getTreatmentFile() {
        return "fluTreatment.json";
    }
}
exports.FlueTreatment = FlueTreatment;
//# sourceMappingURL=FlueTreatment.js.map