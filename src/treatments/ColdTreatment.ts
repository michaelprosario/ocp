import { TreatmentBase } from './TreatmentBase';
import { ConditionEnum } from '../ConditionEnum';

export class ColdTreatment extends TreatmentBase{
  matchesCondition(condition: ConditionEnum): boolean {
    return condition === ConditionEnum.Cold;
  }
  getTreatmentFile(): string {
    return "coldTreatment.json";
  }
}