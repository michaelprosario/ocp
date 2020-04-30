import { Symptoms } from './Symptoms';

export class JsonSymptomsDeserializer {
  public GetSymptomsFromJsonString(symptomsJson: string): Symptoms {
    return JSON.parse(symptomsJson) as Symptoms;
  }
}
