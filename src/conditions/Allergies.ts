import { ConditionBase } from './ConditionBase';
import { Symptoms } from '../Symptoms';
import { ConditionEnum } from '../ConditionEnum';

export class AllergieCondition extends ConditionBase {

    matchesSymptoms(symptoms: Symptoms): boolean {
        return (symptoms.ShortnessOfBreath == true &&
            symptoms.AchesAndPains == false &&
            symptoms.SoreThroat == false &&
            symptoms.RunnyNose == true &&
            symptoms.Sneezing == true)
    }

    response(): ConditionEnum {
        return ConditionEnum.Allergies;
    }
}