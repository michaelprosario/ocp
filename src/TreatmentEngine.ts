using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.IO;

namespace SymptomChecker
{
    public class TreatmentEngine
    {
        public FileTreatmentSource FileTreatmentSource { get; set; } = new FileTreatmentSource();
        public JsonTreatmentDeserializer JsonTreatmentDeserializer { get; set; } = new JsonTreatmentDeserializer();
        public ConsoleLogger Logger { get; set; } = new ConsoleLogger();

        ConditionEnum condition;
        Treatment treatment;

        public void RunTreatmentEngine(ConditionEnum condition)
        {
            this.condition = condition;

            LoadPatientTreatment();

            if (CanTreatmentBeRecomended() == true)
            {
                ShowTreatmentPlan();
                ShowTreatmentMedications();
                ShowTreatmentPrognosis();
            }
        }

        void LoadPatientTreatment()
        {
            string treatmentJson = FileTreatmentSource.GetTreatmentFromFileSource(condition);
            treatment = JsonTreatmentDeserializer.GetTreatmentFromJsonString(treatmentJson);
        }

        bool CanTreatmentBeRecomended()
        {
            bool canTreatmentBeRecommended = false;

            if (condition != ConditionEnum.Unknown)
                canTreatmentBeRecommended = true;
            else
                Logger.Log("Your condition could not be diagnosed by the provided Symptoms. Please follow up with your doctor");

            return canTreatmentBeRecommended;
        }

        void ShowTreatmentPlan()
        {
            Logger.Log("Showing Treatment...");

            Logger.Log($"Your condition is the {treatment.Condition.ToString()}, which requires the following treatment: {treatment.Plan}");
        }
        void ShowTreatmentMedications()
        {
            Logger.Log("Medications Include");
            foreach (string medication in treatment.Medications)
            {
                Logger.Log($"--{medication}");
            }
        }

        void ShowTreatmentPrognosis()
        {
            Logger.Log($"Your prognosis is: {treatment.Prognosis}");
        }

    }
}
