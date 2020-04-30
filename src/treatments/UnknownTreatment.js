"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreatmentBase_1 = require("./TreatmentBase");
const ConditionEnum_1 = require("../ConditionEnum");
class UnknownTreatment extends TreatmentBase_1.TreatmentBase {
    matchesCondition(condition) {
        return condition === ConditionEnum_1.ConditionEnum.Unknown;
    }
    getTreatmentFile() {
        return "unknown.json";
    }
}
exports.UnknownTreatment = UnknownTreatment;
//# sourceMappingURL=UnknownTreatment.js.map