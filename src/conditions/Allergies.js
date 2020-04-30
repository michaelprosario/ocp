"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionBase_1 = require("./ConditionBase");
const ConditionEnum_1 = require("../ConditionEnum");
class AllergieCondition extends ConditionBase_1.ConditionBase {
    matchesSymptoms(symptoms) {
        return (symptoms.ShortnessOfBreath == true &&
            symptoms.AchesAndPains == false &&
            symptoms.SoreThroat == false &&
            symptoms.RunnyNose == true &&
            symptoms.Sneezing == true);
    }
    response() {
        return ConditionEnum_1.ConditionEnum.Allergies;
    }
}
exports.AllergieCondition = AllergieCondition;
//# sourceMappingURL=Allergies.js.map