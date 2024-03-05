import { Before } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login.page';
import { getEnvironment } from '../helper/environment.helper';

Before('@login', async (t) => {
  await login(t);
});

Before('@login_keep_me_signed_in', async (t) => {
  await loginKeepMeSignedIn(t);
});

export const login = async (t: TestController) => {
  await openLoginPage(t);
  await fillUsernameAndPassword(t);
  await clickLoginButton(t);
  await t.wait(5000);
}

export const loginKeepMeSignedIn = async (t: TestController) => {
  await t.resizeWindow(1366, 768); //force desktop view
  await openLoginPage(t);
  await fillUsernameAndPassword(t);
  await tickKeepMeSignedIn(t);
  await clickLoginButton(t);
  await t.wait(5000);
}

const appLoginPage = new LoginPage();

export async function openLoginPage(t: TestController) {
  await t.navigateTo(appLoginPage.url);
}

export async function fillUsernameAndPassword(t: TestController, valid = true) {
  const { password, username } = getEnvironment();
  await t
    .typeText(appLoginPage.username, username, { paste: false })
    .typeText(appLoginPage.password, valid ? password : 'invalidpw', {
      paste: false
    });
}

export async function tickKeepMeSignedIn(t: TestController) {
  await t.click(appLoginPage.keepMeSignedIn);
}

export async function clickLoginButton(t: TestController) {
  await t.click(appLoginPage.loginButton);
}
