"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ColdTreatment_1 = require("./treatments/ColdTreatment");
const FlueTreatment_1 = require("./treatments/FlueTreatment");
const Covid19Treatment_1 = require("./treatments/Covid19Treatment");
const AllergiesTreatment_1 = require("./treatments/AllergiesTreatment");
const UnknownTreatment_1 = require("./treatments/UnknownTreatment");
const CdcNotificationService_1 = require("./CdcNotificationService");
const fs = require('fs');
class FileTreatmentSource {
    GetTreatmentFromFileSource(condition) {
        let treatmentJsonFileName = '';
        // get list of treatments
        let treatments = this.GetTreatments();
        for (let treatment of treatments) {
            if (treatment.matchesCondition(condition)) {
                treatmentJsonFileName = treatment.getTreatmentFile();
            }
        }
        console.log("condition = " + condition);
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.log("treatmentJsonFile = " + treatmentJsonFileName);
        return fs.readFileSync(treatmentJsonFileName, { encoding: 'utf8', flag: 'r' });
    }
    GetTreatments() {
        var notificationService = new CdcNotificationService_1.CdcNotificationService();
        let treatments = Array();
        treatments.push(new AllergiesTreatment_1.AllergiesTreatment());
        treatments.push(new ColdTreatment_1.ColdTreatment());
        treatments.push(new FlueTreatment_1.FlueTreatment());
        treatments.push(new UnknownTreatment_1.UnknownTreatment());
        treatments.push(new Covid19Treatment_1.Covid19Treatment(notificationService));
        return treatments;
    }
}
exports.FileTreatmentSource = FileTreatmentSource;
//# sourceMappingURL=FileTreatmentSource.js.map