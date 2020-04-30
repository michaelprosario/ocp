import { ConditionBase } from "./ConditionBase"
import { Symptoms } from '../Symptoms';
import { ConditionEnum } from '../ConditionEnum';

export class FlueCondition extends ConditionBase {

    matchesSymptoms(symptoms: Symptoms): boolean {
        return (symptoms.Fever == true &&
            symptoms.DryCough == true &&
            symptoms.Headaches == true &&
            symptoms.ShortnessOfBreath == false &&
            symptoms.AchesAndPains == true &&
            symptoms.SoreThroat == true &&
            symptoms.Fatigue == true &&
            symptoms.Sneezing == false);
    }

    response(): ConditionEnum {
        return ConditionEnum.Flu;
    }
}