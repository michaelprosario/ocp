import { ConditionEnum } from '../ConditionEnum';

export abstract class TreatmentBase {
    abstract matchesCondition(condition: ConditionEnum): boolean;
    abstract getTreatmentFile(): string;
}