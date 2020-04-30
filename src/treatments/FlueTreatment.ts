import { TreatmentBase } from './TreatmentBase';
import { ConditionEnum } from '../ConditionEnum';

export class FlueTreatment extends TreatmentBase{
  matchesCondition(condition: ConditionEnum): boolean {
    return condition === ConditionEnum.Flu;
  }
  getTreatmentFile(): string {
    return "fluTreatment.json"
  }
}