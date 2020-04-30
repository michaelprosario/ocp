import { DiagnosticEngine } from './DiagnosticEngine';
import { TreatmentEngine } from './TreatmentEngine';

console.log('NOTE: This program is for educational purposes only. For real medical advice consult your doctor.');
console.log('Symptom Checker Starting...');

const diagnosticEngine = new DiagnosticEngine();
diagnosticEngine.RunDiagnosticEngine();

console.log(diagnosticEngine.Diagnosis);

const treatmentEngine = new TreatmentEngine();
treatmentEngine.RunTreatmentEngine(diagnosticEngine.Diagnosis);
