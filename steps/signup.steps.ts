import { Given, Then, When } from '@cucumber/cucumber'
import { InboxDto, MailSlurp } from 'mailslurp-client';
import {
  openLoginPage
} from '../hooks/login.hook'
import { LoginPage } from '../pages/login.page'
import { SignupPage } from '../pages/signup.page'
import { VaultsPage } from '../pages/vaults.page'
import { ClientFunction } from 'gherkin-testcafe'
import { SignupVerifyPage } from '../pages/signup-verify.page';
import { SignupSuccessPage } from '../pages/signup-success.page';

const loginPage = new LoginPage()
const signupPage = new SignupPage()
const signupVerifyPage = new SignupVerifyPage()
const signupSuccessPage = new SignupSuccessPage()
const vaultsPage = new VaultsPage()

const getLocation = ClientFunction(() => document.location.href)
const mailslurp = new MailSlurp({ apiKey: 'f8ccb3861a2c4c0e58118ce502c3a20e199f5b95b59cf3972dabc9b17570a01a' });

let inbox: InboxDto;

Given('I see the landing page of Akord app', async t => {
  await openLoginPage(t)
})

When('I click the sign up link', async t => {
  await t.click(loginPage.signUp);
  await t.wait(3000);
})

When('I fill in the sign up form with valid user data', async t => {
  inbox = await mailslurp.inboxController.createInbox({});
  const username = inbox.emailAddress;
  const password = inbox.emailAddress;
  await t
    .typeText(signupPage.username, username, { paste: false })
    .typeText(signupPage.password, password, {
      paste: false
    });
})

When('I tick the terms and conditions checkbox', async t => {
  await t.click(signupPage.termsCheckbox);
})

When('I tick the withdrawal consent checkbox', async t => {
  await t.click(signupPage.withdrawalCheckbox);
})

When('I click on next button', async t => {
  await t.click(signupPage.nextButton);
})

When('I click on setup account button', async t => {
  await t.click(signupVerifyPage.setupAccountButton);
})

Then('I see the signup page', async t => {
  await t.expect(getLocation()).contains(signupPage.url)
})

Then('I see the signup verification page', async t => {
  await t.expect(getLocation()).contains(signupVerifyPage.url)
})

Then('I see the signup success page', async t => {
  await t.expect(getLocation()).contains(signupSuccessPage.url)
})

Then('I see the vaults page', async t => {
  await t.expect(getLocation()).contains(vaultsPage.url)
})

Then('I see a login error message', async t => {
  await t.expect(loginPage.loginErrorMessage.exists).ok()
})

Then('I do not see login error message', async t => {
  await t.expect(loginPage.loginErrorMessage.exists).notOk()
})
