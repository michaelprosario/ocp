"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionEnum_1 = require("./ConditionEnum");
const ConsoleLogger_1 = require("./ConsoleLogger");
const FileTreatmentSource_1 = require("./FileTreatmentSource");
const JsonTreatmentDeserializer_1 = require("./JsonTreatmentDeserializer");
class TreatmentEngine {
    constructor() {
        this.FileTreatmentSource = new FileTreatmentSource_1.FileTreatmentSource();
        this.JsonTreatmentDeserializer = new JsonTreatmentDeserializer_1.JsonTreatmentDeserializer();
        this.Logger = new ConsoleLogger_1.ConsoleLogger();
    }
    RunTreatmentEngine(condition) {
        this.condition = condition;
        this.LoadPatientTreatment();
        if (this.CanTreatmentBeRecomended() == true) {
            this.ShowTreatmentPlan();
            this.ShowTreatmentMedications();
            this.ShowTreatmentPrognosis();
        }
    }
    LoadPatientTreatment() {
        console.log(this.condition);
        let treatmentJson = this.FileTreatmentSource.GetTreatmentFromFileSource(this.condition);
        console.log(treatmentJson);
        this.treatment = this.JsonTreatmentDeserializer.GetTreatmentFromJsonString(treatmentJson);
    }
    CanTreatmentBeRecomended() {
        let canTreatmentBeRecommended = false;
        if (this.condition != ConditionEnum_1.ConditionEnum.Unknown)
            canTreatmentBeRecommended = true;
        else
            this.Logger.Log('Your condition could not be diagnosed by the provided Symptoms. Please follow up with your doctor');
        return canTreatmentBeRecommended;
    }
    ShowTreatmentPlan() {
        this.Logger.Log('Showing Treatment...');
        this.Logger.Log(`Your condition is the {treatment.Condition.ToString()}, which requires the following treatment: ${this.treatment.Plan}`);
    }
    ShowTreatmentMedications() {
        this.Logger.Log('Medications Include');
        for (let medication of this.treatment.Medications) {
            this.Logger.Log(`--${medication}`);
        }
    }
    ShowTreatmentPrognosis() {
        this.Logger.Log(`Your prognosis is: ${this.treatment.Prognosis}`);
    }
}
exports.TreatmentEngine = TreatmentEngine;
//# sourceMappingURL=TreatmentEngine.js.map