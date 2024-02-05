import { Selector } from 'testcafe';
import { getEnvironment } from '../helper/environment.helper';

export class SecurityAndPrivacyPage {
  url: string;
  host: string;
  deleteAccount: Selector;
  deleteAccountButton: Selector;
  deleteAccountConfirmation: Selector;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}account/security`
    this.deleteAccount = Selector('p').withText('Delete account');
    this.deleteAccountButton = Selector('button').withText('Delete');
    this.deleteAccountConfirmation = Selector('div').withText('Request to delete the account was successfully sent.');
  }
}
