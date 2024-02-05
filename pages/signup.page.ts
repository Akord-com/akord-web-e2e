import { getEnvironment } from '../helper/environment.helper';
import { Selector } from 'testcafe';

export class SignupPage {
  url: string;
  username: string;
  password: string;
  nextButton: Selector;
  termsCheckbox: Selector;
  withdrawalCheckbox: Selector;
  host: string;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}signup`
    this.nextButton = Selector('button').withText('Next');
    this.termsCheckbox = Selector('span').withText('I have read and agree to the');
    this.withdrawalCheckbox = Selector('span').withText('By creating your Account, you agree to waive your');
    this.username = '#enter-email'
    this.password = '#enter-password'
  }
}
