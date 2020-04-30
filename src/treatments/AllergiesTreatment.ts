import { TreatmentBase } from './TreatmentBase';
import { ConditionEnum } from '../ConditionEnum';

export class AllergiesTreatment extends TreatmentBase{
    matchesCondition(condition: ConditionEnum): boolean {
        return condition === ConditionEnum.Allergies
    }
    getTreatmentFile(): string {
        return 'allergiesTreatment.json';
    }

}