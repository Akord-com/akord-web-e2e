import { Selector } from 'testcafe';
import { getEnvironment } from '../helper/environment.helper';

export class AccountPage {
  url: string;
  host: string;
  securityAndPrivacy: Selector;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}account`
    this.securityAndPrivacy = Selector('p').withText('Security and Privacy');
  }
}
