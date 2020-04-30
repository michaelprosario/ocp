"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionBase_1 = require("./ConditionBase");
const ConditionEnum_1 = require("../ConditionEnum");
class FlueCondition extends ConditionBase_1.ConditionBase {
    matchesSymptoms(symptoms) {
        return (symptoms.Fever == true &&
            symptoms.DryCough == true &&
            symptoms.Headaches == true &&
            symptoms.ShortnessOfBreath == false &&
            symptoms.AchesAndPains == true &&
            symptoms.SoreThroat == true &&
            symptoms.Fatigue == true &&
            symptoms.Sneezing == false);
    }
    response() {
        return ConditionEnum_1.ConditionEnum.Flu;
    }
}
exports.FlueCondition = FlueCondition;
//# sourceMappingURL=FlueCondition.js.map