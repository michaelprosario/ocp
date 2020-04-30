"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionBase_1 = require("./ConditionBase");
const ConditionEnum_1 = require("../ConditionEnum");
class CoronaVirusCondition extends ConditionBase_1.ConditionBase {
    matchesSymptoms(symptoms) {
        let doSymptomsMatchCoronaVirus = false;
        if (symptoms.Fever == true &&
            symptoms.DryCough == true &&
            symptoms.ShortnessOfBreath == true &&
            symptoms.RunnyNose &&
            symptoms.Sneezing) {
            doSymptomsMatchCoronaVirus = true;
        }
        return doSymptomsMatchCoronaVirus;
    }
    response() {
        return ConditionEnum_1.ConditionEnum.COVID19;
    }
}
exports.CoronaVirusCondition = CoronaVirusCondition;
//# sourceMappingURL=CoronaVirusCondition.js.map