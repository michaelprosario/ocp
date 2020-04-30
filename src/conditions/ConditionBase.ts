import { Symptoms } from '../Symptoms';
import { ConditionEnum } from '../ConditionEnum';

export abstract class ConditionBase {
    abstract matchesSymptoms(symptoms: Symptoms): boolean;
    abstract response(): ConditionEnum;
}