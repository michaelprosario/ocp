import { ConditionEnum } from '../ConditionEnum';
import { TreatmentBase } from './TreatmentBase';

export class Covid19Treatment extends TreatmentBase {
    constructor(private notificationService: CdcNotificationService){}

    matchesCondition(condition: ConditionEnum): boolean {
        // notify
        this.notificationService.notify();
        return condition === ConditionEnum.COVID19;
    }
    
    getTreatmentFile(): string {

        // do notification stuff 
        

        return 'covidtreatment.json';
    }
}