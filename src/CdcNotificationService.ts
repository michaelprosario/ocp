import { ConsoleLogger } from './ConsoleLogger';

export class CdcNotificationService {
  public Logger: ConsoleLogger = new ConsoleLogger();

  publicNotifySuspectedCOVID19Case() {
    //This does not actually notify anyone, but if this were real it would here!
    this.Logger.Log('Succesfully Notified CDC of suspected COVID-19 Diagnostic.');
  }
}
