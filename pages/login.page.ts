import { getEnvironment } from '../helper/environment.helper';
import { Selector } from 'testcafe';

export class LoginPage {
  url: string;
  username: string;
  password: string;
  loginButton: Selector;
  keepMeSignedIn: Selector;
  signUp: Selector;
  host: string;
  loginErrorMessage: Selector;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = getEnvironment().url.href;
    this.loginButton = Selector('button').withText('Log in');
    this.keepMeSignedIn = Selector('span').withText('Keep me signed in');
    this.signUp = Selector('a').withText('Sign up');
    this.username = '#email-input'
    this.password = '#password-input'
    this.loginErrorMessage = Selector('.MuiAlert-message').withText('Your login details are not recognised. Please check your email and password.')
  }
}
