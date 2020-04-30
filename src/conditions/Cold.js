"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionBase_1 = require("./ConditionBase");
const ConditionEnum_1 = require("../ConditionEnum");
class Cold extends ConditionBase_1.ConditionBase {
    matchesSymptoms(symptoms) {
        return (symptoms.AchesAndPains == true &&
            symptoms.Fever == false &&
            symptoms.SoreThroat == true &&
            symptoms.ShortnessOfBreath == false &&
            symptoms.RunnyNose == true &&
            symptoms.Sneezing == true);
    }
    response() {
        return ConditionEnum_1.ConditionEnum.Cold;
    }
}
exports.Cold = Cold;
//# sourceMappingURL=Cold.js.map