"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class FileSymptomsSource {
    GetSymptomsFromSource() {
        return fs.readFileSync('symptoms.json', { encoding: 'utf8', flag: 'r' });
    }
}
exports.FileSymptomsSource = FileSymptomsSource;
//# sourceMappingURL=FileSymptomsSource.js.map