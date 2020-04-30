namespace SymptomChecker
{
    export class CdcNotificationService
    {
        public Logger : ConsoleLogger = new ConsoleLogger();

        public void NotifySuspectedCOVID19Case()
        {
            //This does not actually notify anyone, but if this were real it would here!
            Logger.Log("Succesfully Notified CDC of suspected COVID-19 Diagnostic.");
        }
    }
}