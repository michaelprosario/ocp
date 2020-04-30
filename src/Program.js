"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiagnosticEngine_1 = require("./DiagnosticEngine");
const TreatmentEngine_1 = require("./TreatmentEngine");
console.log('NOTE: This program is for educational purposes only. For real medical advice consult your doctor.');
console.log('Symptom Checker Starting...');
const diagnosticEngine = new DiagnosticEngine_1.DiagnosticEngine();
diagnosticEngine.RunDiagnosticEngine();
console.log(diagnosticEngine.Diagnosis);
const treatmentEngine = new TreatmentEngine_1.TreatmentEngine();
treatmentEngine.RunTreatmentEngine(diagnosticEngine.Diagnosis);
//# sourceMappingURL=Program.js.map