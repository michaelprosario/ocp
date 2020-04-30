"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var fs = require('fs');
class ConditionDefinitionsRepository {
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const files = fs.readdirSync(ConditionDefinitionsRepository.CONDITIONS_FILE_PATH);
            const conditions = [];
            for (let i = 0; i < files.length; i++) {
                if (files[i] !== 'ConditionBase.ts') {
                    const condition = yield Promise.resolve().then(() => require(ConditionDefinitionsRepository.CONDITIONS_FILE_PATH + files[i]));
                    conditions.push(condition);
                }
            }
            return conditions;
        });
    }
}
exports.ConditionDefinitionsRepository = ConditionDefinitionsRepository;
ConditionDefinitionsRepository.CONDITIONS_FILE_PATH = '../conditions/';
//# sourceMappingURL=ConditionDefinitionsRepository.js.map