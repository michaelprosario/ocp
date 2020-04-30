using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace SymptomChecker
{
    public class FileTreatmentSource
    {
        public string GetTreatmentFromFileSource(ConditionEnum condition)
        {
            string treatmentJsonFileName = string.Empty;

            switch (condition)
            {
                case ConditionEnum.Cold:
                    treatmentJsonFileName = "coldTreatment.json";
                    break;
                case ConditionEnum.Flu:
                    treatmentJsonFileName = "fluTreatment.json";
                    break;
                case ConditionEnum.Allergies:
                    treatmentJsonFileName = "allergiesTreatment.json";
                    break;
            }

            return File.ReadAllText(treatmentJsonFileName);
        }
    }
}
