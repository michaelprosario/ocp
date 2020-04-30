import { TreatmentBase } from './TreatmentBase';
import { ConditionEnum } from '../ConditionEnum';

export class UnknownTreatment extends TreatmentBase{
  matchesCondition(condition: ConditionEnum): boolean {
    return condition === ConditionEnum.Unknown;
  }
  getTreatmentFile(): string {
    return "unknown.json"
  }
}