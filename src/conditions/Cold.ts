import { ConditionBase } from './ConditionBase';
import { Symptoms } from '../Symptoms';
import { ConditionEnum } from '../ConditionEnum';

export class Cold extends ConditionBase {
    matchesSymptoms(symptoms: Symptoms): boolean {
        return (symptoms.AchesAndPains == true &&
            symptoms.Fever == false &&
            symptoms.SoreThroat == true &&
            symptoms.ShortnessOfBreath == false &&
            symptoms.RunnyNose == true &&
            symptoms.Sneezing == true);
    }

    response(): ConditionEnum {
        return ConditionEnum.Cold;
    }
}