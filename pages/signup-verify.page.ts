import { getEnvironment } from '../helper/environment.helper';
import { Selector } from 'testcafe';

export class SignupVerifyPage {
  url: string;
  host: string;
  setupAccountButton: Selector;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}signup/backup-phrase`
    this.setupAccountButton = Selector('button').withText('Setup account');
  }
}
