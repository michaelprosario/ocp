namespace SymptomChecker
{
    class DiagnosticEngine
    {
        public FileSymptomsSource SymptomsSource { get; set; } = new FileSymptomsSource();
        public JsonSymptomsDeserializer SymptomsDeserializer { get; set; } = new JsonSymptomsDeserializer();
        public ConsoleLogger Logger { get; set; } = new ConsoleLogger();
        public ConditionEnum Diagnosis { get; set; }

        Symptoms symptoms;

        public void RunDiagnosticEngine()
        {
            LoadPatientSymptoms();
            Diagnose();
        }

        void LoadPatientSymptoms()
        {
            Logger.Log("Loading Symptoms.");

            string symptomsJson = SymptomsSource.GetSymptomsFromSource();

            symptoms = SymptomsDeserializer.GetSymptomsFromJsonString(symptomsJson);
        }

        void Diagnose()
        {
            Logger.Log("Starting Diagnosis.");

            if (IsSymptomaticOfCold() == true)
            {
                Diagnosis = ConditionEnum.Cold;
            }
            else if (IsSymptomaticOfFlu() == true)
            {
                Diagnosis = ConditionEnum.Flu;
            }
            else if (IsSymptomaticOfAllergies() == true)
            {
                Diagnosis = ConditionEnum.Allergies;
            }
            else
            {
                Diagnosis = ConditionEnum.Unknown;
                Logger.Log("Diagnosis could not be determined.");
                return;
            }

            Logger.Log("Diagnosis is " + Diagnosis);
        }

        bool IsSymptomaticOfCold()
        {
            bool doSymptomsMatchCold = false;

            if (symptoms.AchesAndPains == true &&
                symptoms.Fever == false &&
                symptoms.SoreThroat == true &&
                symptoms.ShortnessOfBreath == false &&
                symptoms.RunnyNose == true &&
                symptoms.Sneezing == true)
            {
                doSymptomsMatchCold = true;
            }

            return doSymptomsMatchCold;
        }

        bool IsSymptomaticOfFlu()
        {
            bool doSymptomsMatchFlu = false;

            if (symptoms.Fever == true &&
                    symptoms.DryCough == true &&
                    symptoms.Headaches == true &&
                    symptoms.ShortnessOfBreath == false &&
                    symptoms.AchesAndPains == true &&
                    symptoms.SoreThroat == true &&
                    symptoms.Fatigue == true &&
                    symptoms.Sneezing == false)
            {
                doSymptomsMatchFlu = true;
            }

            return doSymptomsMatchFlu;
        }

        bool IsSymptomaticOfAllergies()
        {
            bool doSymptomsMatchAllergies = false;

            if (symptoms.ShortnessOfBreath == true &&
                    symptoms.AchesAndPains == false &&
                    symptoms.SoreThroat == false &&
                    symptoms.RunnyNose == true &&
                    symptoms.Sneezing == true)
            {
                doSymptomsMatchAllergies = true;
            }

            return doSymptomsMatchAllergies;
        }
    }
}
