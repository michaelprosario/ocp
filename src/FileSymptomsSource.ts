using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace SymptomChecker
{
    public class FileSymptomsSource
    {
        public string GetSymptomsFromSource()
        {
            return File.ReadAllText("symptoms.json");
        }
    }
}
