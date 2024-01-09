import { getEnvironment } from '../helper/environment.helper';

export class SignupSuccessPage {
  url: string;
  host: string;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}signup/account-created`
  }
}
