import { Treatment } from './Treatment';

export class JsonTreatmentDeserializer {
  public GetTreatmentFromJsonString(jsonString: string): Treatment {
    return JSON.parse(jsonString) as Treatment;
  }
}
