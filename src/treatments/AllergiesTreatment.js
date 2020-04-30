"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreatmentBase_1 = require("./TreatmentBase");
const ConditionEnum_1 = require("../ConditionEnum");
class AllergiesTreatment extends TreatmentBase_1.TreatmentBase {
    matchesCondition(condition) {
        return condition === ConditionEnum_1.ConditionEnum.Allergies;
    }
    getTreatmentFile() {
        return 'allergiesTreatment.json';
    }
}
exports.AllergiesTreatment = AllergiesTreatment;
//# sourceMappingURL=AllergiesTreatment.js.map