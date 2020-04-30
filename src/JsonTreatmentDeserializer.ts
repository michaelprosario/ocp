using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Text;

namespace SymptomChecker
{
    public class JsonTreatmentDeserializer
    {
        public Treatment GetTreatmentFromJsonString(string jsonString)
        {
            return JsonConvert.DeserializeObject<Treatment>(jsonString,
                new StringEnumConverter());
        }
    }
}
