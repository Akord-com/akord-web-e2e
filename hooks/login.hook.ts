import { Before } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login.page';
import { getEnvironment } from '../helper/environment.helper';

Before('@login', async (t) => {
  await openLoginPage(t);
  await fillUsernameAndPassword(t);
  await clickLoginButton(t);
});

Before('@login_keep_me_signed_in', async (t) => {
  await openLoginPage(t);
  await fillUsernameAndPassword(t);
  await tickKeepMeSignedIn(t);
  await clickLoginButton(t);
});

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
  await t.wait(10000);
}
