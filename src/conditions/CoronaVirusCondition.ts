import { Symptoms } from '../Symptoms';
import { ConditionBase } from './ConditionBase';
import { ConditionEnum } from '../ConditionEnum';

export class CoronaVirusCondition extends ConditionBase {
    matchesSymptoms(symptoms: Symptoms): boolean {
        let doSymptomsMatchCoronaVirus = false;

        if (symptoms.Fever == true &&
            symptoms.DryCough == true &&
            symptoms.ShortnessOfBreath == true &&
            symptoms.RunnyNose &&
            symptoms.Sneezing) {
            doSymptomsMatchCoronaVirus = true;
        }

        return doSymptomsMatchCoronaVirus;
    }

    response(): ConditionEnum {
        return ConditionEnum.COVID19;
    }
}