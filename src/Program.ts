using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.IO;

namespace SymptomChecker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("NOTE: This program is for educational purposes only. For real medical advice consult your doctor.");

            Console.WriteLine("Symptom Checker Starting...");

            DiagnosticEngine diagnosticEngine = new DiagnosticEngine();
            diagnosticEngine.RunDiagnosticEngine();

            TreatmentEngine treatmentEngine = new TreatmentEngine();
            treatmentEngine.RunTreatmentEngine(diagnosticEngine.Diagnosis);
        }

    }
}
