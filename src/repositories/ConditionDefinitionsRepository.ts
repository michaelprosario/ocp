import { ConditionBase } from '../conditions/ConditionBase';
var fs = require('fs');

export class ConditionDefinitionsRepository {
  private static CONDITIONS_FILE_PATH = '../conditions/';

  public async getAll(): Promise<Array<ConditionBase>> {
    const files = fs.readdirSync(ConditionDefinitionsRepository.CONDITIONS_FILE_PATH);
    const conditions: Array<ConditionBase> = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i] !== 'ConditionBase.ts') {
        const condition = await import(ConditionDefinitionsRepository.CONDITIONS_FILE_PATH + files[i]);
        conditions.push(condition);
      }
    }
    return conditions;
  }
}