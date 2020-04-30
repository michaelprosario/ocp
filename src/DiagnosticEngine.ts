import { FileSymptomsSource } from './FileSymptomsSource';
import { JsonSymptomsDeserializer } from './JsonSymptomsDeserializer';
import { ConsoleLogger } from './ConsoleLogger';
import { ConditionEnum } from './ConditionEnum';
import { Symptoms } from './Symptoms';

export class DiagnosticEngine {
  public SymptomsSource: FileSymptomsSource = new FileSymptomsSource();
  public SymptomsDeserializer: JsonSymptomsDeserializer = new JsonSymptomsDeserializer();
  public Logger: ConsoleLogger = new ConsoleLogger();
  public Diagnosis: ConditionEnum;

  symptoms: Symptoms;

  public RunDiagnosticEngine() {
    this.LoadPatientSymptoms();
    this.Diagnose();
  }

  LoadPatientSymptoms() {
    this.Logger.Log("Loading Symptoms.");
    let symptomsJson: string = this.SymptomsSource.GetSymptomsFromSource();
    this.symptoms = this.SymptomsDeserializer.GetSymptomsFromJsonString(symptomsJson);
  }

  Diagnose() {
    this.Logger.Log("Starting Diagnosis.");

    if (this.IsSymptomaticOfCold() == true) {
      this.Diagnosis = ConditionEnum.Cold;
    }
    else if (this.IsSymptomaticOfFlu() == true) {
      this.Diagnosis = ConditionEnum.Flu;
    }
    else if (this.IsSymptomaticOfAllergies() == true) {
      this.Diagnosis = ConditionEnum.Allergies;
    }
    else {
      this.Diagnosis = ConditionEnum.Unknown;
      this.Logger.Log("Diagnosis could not be determined.");
      return;
    }

    this.Logger.Log("Diagnosis is " + this.Diagnosis);
  }

  IsSymptomaticOfCold(): boolean {
    let doSymptomsMatchCold = false;

    if (this.symptoms.AchesAndPains == true &&
      this.symptoms.Fever == false &&
      this.symptoms.SoreThroat == true &&
      this.symptoms.ShortnessOfBreath == false &&
      this.symptoms.RunnyNose == true &&
      this.symptoms.Sneezing == true) {
      doSymptomsMatchCold = true;
    }

    return doSymptomsMatchCold;
  }

  IsSymptomaticOfFlu(): boolean {
    let doSymptomsMatchFlu = false;

    if (this.symptoms.Fever == true &&
      this.symptoms.DryCough == true &&
      this.symptoms.Headaches == true &&
      this.symptoms.ShortnessOfBreath == false &&
      this.symptoms.AchesAndPains == true &&
      this.symptoms.SoreThroat == true &&
      this.symptoms.Fatigue == true &&
      this.symptoms.Sneezing == false) {
      doSymptomsMatchFlu = true;
    }

    return doSymptomsMatchFlu;
  }

  IsSymptomaticOfAllergies() : boolean {
    let doSymptomsMatchAllergies: boolean = false;

    if (this.symptoms.ShortnessOfBreath == true &&
      this.symptoms.AchesAndPains == false &&
      this.symptoms.SoreThroat == false &&
      this.symptoms.RunnyNose == true &&
      this.symptoms.Sneezing == true) {
      doSymptomsMatchAllergies = true;
    }

    return doSymptomsMatchAllergies;
  }
}
