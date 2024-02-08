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
import { AccountPage } from '../pages/account.page';
import { SecurityAndPrivacyPage } from '../pages/security-and-privacy.page';

const loginPage = new LoginPage()
const signupPage = new SignupPage()
const signupVerifyPage = new SignupVerifyPage()
const signupSuccessPage = new SignupSuccessPage()
const vaultsPage = new VaultsPage()
const accountPage = new AccountPage()
const securityAndPrivacyPage = new SecurityAndPrivacyPage()

const getLocation = ClientFunction(() => document.location.href)
const mailslurp = new MailSlurp({ apiKey: 'ba1413179998195c95ed558d0854bb002f24b60c819a8ed56ce286024c5826f9' });

let inbox: InboxDto;
let username: string;
let password: string;

Given('I see the landing page of Akord app', async t => {
  await openLoginPage(t)
})

Given('I see the signup page', async t => {
  await t.navigateTo(signupPage.url);
})

When('I click the sign up link', async t => {
  await t.click(loginPage.signUp);
  await t.wait(3000);
})

When('I fill in the sign up form with valid user data', async t => {
  try {
    inbox = await mailslurp.inboxController.createInbox({});
    username = inbox.emailAddress;
    password = inbox.emailAddress;
    await t
      .typeText(signupPage.username, username, { paste: false })
      .typeText(signupPage.password, password, {
        paste: false
      });
  } catch (error) {
    console.error(error);
  }
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

When('I confirm email address', async t => {
  const email = await mailslurp.waitForLatestEmail(inbox.id!, 60000);
  const emailContent = email.body;

  // Parse email content to extract the link
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
  const match = emailContent.match(linkRegex);

  if (!match || !match[2]) {
    console.error('No link found in the email.');
    return;
  }

  const link = match[2];

  await t.navigateTo(link);
  await t.wait(5000)
})

When('I put the password and click on login', async t => {
  // Login is prefield from email link
  await t
    .typeText(loginPage.password, password, { paste: false })
  await t.click(loginPage.loginButton);
})

When('I click on setup account button', async t => {
  await t.click(signupVerifyPage.setupAccountButton);
})

When('I click on account link', async t => {
  await t.click(signupVerifyPage.setupAccountButton);
})

When('I click on the account link', async t => {
  await t.click(vaultsPage.account);
})

When('I click on the security and privacy link', async t => {
  await t.click(accountPage.securityAndPrivacy);
})

When('I click on the delete account link', async t => {
  await t.click(securityAndPrivacyPage.deleteAccount);
})

When('I click on the delete account button', async t => {
  await t.click(securityAndPrivacyPage.deleteAccountButton);
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

Then('I see the vaults page with 0 vaults', async t => {
  await t.expect(getLocation()).contains(vaultsPage.url)
  await t.expect(vaultsPage.vaultsCreateHeader.exists).ok({ timeout: 5000 })
})

Then('I see the account page', async t => {
  await t.expect(getLocation()).contains(accountPage.url)
})

Then('I see the security and privacy page', async t => {
  await t.expect(getLocation()).contains(securityAndPrivacyPage.url)
})

Then('I see the delete account modal with delete button', async t => {
  await t.expect(securityAndPrivacyPage.deleteAccountButton.exists).ok({ timeout: 2000 })
})

Then('I see the delete account confirmation', async t => {
  await t.expect(securityAndPrivacyPage.deleteAccountConfirmation.exists).ok({ timeout: 3000 })
})