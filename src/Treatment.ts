using System;
using System.Collections.Generic;
using System.Text;

namespace SymptomChecker
{
    public class Treatment
    {
        public ConditionEnum Condition { get; set; }
        public List<string> Medications { get; set; }
        public string Plan { get; set; }
        public string Prognosis { get; set; }
    }
}
