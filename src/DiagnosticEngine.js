"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FileSymptomsSource_1 = require("./FileSymptomsSource");
const JsonSymptomsDeserializer_1 = require("./JsonSymptomsDeserializer");
const ConsoleLogger_1 = require("./ConsoleLogger");
const Allergies_1 = require("./conditions/Allergies");
const ConditionDefinitionsRepository_1 = require("./repositories/ConditionDefinitionsRepository");
class DiagnosticEngine {
    constructor() {
        this.SymptomsSource = new FileSymptomsSource_1.FileSymptomsSource();
        this.SymptomsDeserializer = new JsonSymptomsDeserializer_1.JsonSymptomsDeserializer();
        this.Logger = new ConsoleLogger_1.ConsoleLogger();
        this.allergies = new Allergies_1.AllergieCondition();
        this.conditionDefinitionsRepository = new ConditionDefinitionsRepository_1.ConditionDefinitionsRepository();
    }
    RunDiagnosticEngine() {
        this.LoadPatientSymptoms();
        this.Diagnose();
    }
    LoadPatientSymptoms() {
        this.Logger.Log("Loading Symptoms.");
        let symptomsJson = this.SymptomsSource.GetSymptomsFromSource();
        this.symptoms = this.SymptomsDeserializer.GetSymptomsFromJsonString(symptomsJson);
    }
    Diagnose() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const conditionDefinitions = yield this.conditionDefinitionsRepository.getAll();
            console.log(conditionDefinitions);
            console.log('definitions', conditionDefinitions);
            for (let i = 0; i < conditionDefinitions.length; i++) {
                if (conditionDefinitions[i].matchesSymptoms(this.symptoms)) {
                    this.Diagnosis = conditionDefinitions[i].response();
                    break;
                }
            }
            this.Logger.Log("Diagnosis is " + this.Diagnosis);
        });
    }
}
exports.DiagnosticEngine = DiagnosticEngine;
//# sourceMappingURL=DiagnosticEngine.js.map