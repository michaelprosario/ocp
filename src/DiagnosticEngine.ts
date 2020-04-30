import { FileSymptomsSource } from './FileSymptomsSource';
import { JsonSymptomsDeserializer } from './JsonSymptomsDeserializer';
import { ConsoleLogger } from './ConsoleLogger';
import { ConditionEnum } from './ConditionEnum';
import { Symptoms } from './Symptoms';
import { AllergieCondition } from './conditions/Allergies';
import { ConditionBase } from './conditions/ConditionBase';
import { ConditionDefinitionsRepository } from './repositories/ConditionDefinitionsRepository';

export class DiagnosticEngine {
  public SymptomsSource: FileSymptomsSource = new FileSymptomsSource();
  public SymptomsDeserializer: JsonSymptomsDeserializer = new JsonSymptomsDeserializer();
  public Logger: ConsoleLogger = new ConsoleLogger();
  public Diagnosis: ConditionEnum;
  public allergies: AllergieCondition = new AllergieCondition();
  private conditionDefinitionsRepository = new ConditionDefinitionsRepository();
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

  async Diagnose() {
    const conditionDefinitions: Array<ConditionBase> = await this.conditionDefinitionsRepository.getAll();
    console.log('tst', conditionDefinitions);

    for (let i = 0; i < conditionDefinitions.length; i++) {
      if (conditionDefinitions[i].matchesSymptoms(this.symptoms)) {
        this.Diagnosis = conditionDefinitions[i].response();
        break;
      }
    }

    this.Logger.Log("Diagnosis is " + this.Diagnosis);
  }
}