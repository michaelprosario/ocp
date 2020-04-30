const fs = require('fs');

export class FileSymptomsSource {
  public GetSymptomsFromSource(): string {
    return fs.readFileSync('symptoms.json', { encoding: 'utf8', flag: 'r' });
  }
}
