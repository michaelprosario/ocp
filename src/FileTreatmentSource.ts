import { ConditionEnum } from './ConditionEnum';

const fs = require('fs');

export class FileTreatmentSource {
  public GetTreatmentFromFileSource(condition: ConditionEnum): string {
    let treatmentJsonFileName: string = '';

    console.log("condition = " + condition);

    switch (condition) {
      case ConditionEnum.Cold:
        treatmentJsonFileName = 'coldTreatment.json';
        break;
      case ConditionEnum.Flu:
        treatmentJsonFileName = 'fluTreatment.json';
        break;
      case ConditionEnum.Allergies:
        treatmentJsonFileName = 'allergiesTreatment.json';
        break;
    }

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log(treatmentJsonFileName);

    return fs.readFileSync(treatmentJsonFileName, { encoding: 'utf8', flag: 'r' });
  }
}

