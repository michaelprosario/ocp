import { ConditionEnum } from './ConditionEnum';
import { TreatmentBase } from './treatments/TreatmentBase';
import { ColdTreatment } from './treatments/ColdTreatment';
import { FlueTreatment } from './treatments/FlueTreatment';
import { Covid19Treatment } from './treatments/Covid19Treatment';
import { AllergiesTreatment } from './treatments/AllergiesTreatment';
import { UnknownTreatment } from './treatments/UnknownTreatment';
import { CdcNotificationService } from './CdcNotificationService';


const fs = require('fs');

export class FileTreatmentSource {
  public GetTreatmentFromFileSource(condition: ConditionEnum): string {
    let treatmentJsonFileName: string = '';

    // get list of treatments
    let treatments = this.GetTreatments();
    for (let treatment of treatments){
      if(treatment.matchesCondition(condition)){
        treatmentJsonFileName = treatment.getTreatmentFile();
      }
    }

    console.log("condition = " + condition);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log("treatmentJsonFile = " + treatmentJsonFileName);

    return fs.readFileSync(treatmentJsonFileName, { encoding: 'utf8', flag: 'r' });
  }

  private GetTreatments() : Array<TreatmentBase> {
    var notificationService = new CdcNotificationService();

    let treatments = Array<TreatmentBase>();
    treatments.push(new AllergiesTreatment());
    treatments.push(new ColdTreatment());
    treatments.push(new FlueTreatment());
    treatments.push(new UnknownTreatment());


    treatments.push(new Covid19Treatment(notificationService));

    return treatments;
  }
}

