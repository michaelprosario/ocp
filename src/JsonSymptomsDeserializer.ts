using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Text;

namespace SymptomChecker
{
    public class JsonSymptomsDeserializer
    {
        public Symptoms GetSymptomsFromJsonString(string symptomsJson)
        {
            return JsonConvert.DeserializeObject<Symptoms>(symptomsJson, 
                new StringEnumConverter());
        }
    }
}
