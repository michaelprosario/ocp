import { ConditionEnum } from './ConditionEnum';
import { ConsoleLogger } from './ConsoleLogger';
import { FileTreatmentSource } from './FileTreatmentSource';
import { JsonTreatmentDeserializer } from './JsonTreatmentDeserializer';
import { Treatment } from './Treatment';

export class TreatmentEngine {
  public FileTreatmentSource: FileTreatmentSource = new FileTreatmentSource();
  public JsonTreatmentDeserializer: JsonTreatmentDeserializer = new JsonTreatmentDeserializer();
  public Logger: ConsoleLogger = new ConsoleLogger();

  condition: ConditionEnum;
  treatment: Treatment;

  public RunTreatmentEngine(condition: ConditionEnum) {
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
    let treatmentJson: string = this.FileTreatmentSource.GetTreatmentFromFileSource(this.condition);
    console.log(treatmentJson);
    this.treatment = this.JsonTreatmentDeserializer.GetTreatmentFromJsonString(treatmentJson);
  }

  CanTreatmentBeRecomended(): boolean {
    let canTreatmentBeRecommended: boolean = false;

    if (this.condition != ConditionEnum.Unknown)
      canTreatmentBeRecommended = true;
    else
      this.Logger.Log('Your condition could not be diagnosed by the provided Symptoms. Please follow up with your doctor');

    return canTreatmentBeRecommended;
  }

  ShowTreatmentPlan(): void {
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

