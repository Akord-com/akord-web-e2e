import { Given, Then, When } from '@cucumber/cucumber'
import {
  clickLoginButton,
  fillUsernameAndPassword,
  openLoginPage
} from '../hooks/login.hook'
import { LoginPage } from '../pages/login.page'
import { VaultsPage } from '../pages/vaults.page'
import { ClientFunction } from 'gherkin-testcafe'

const loginPage = new LoginPage()
const vaultsPage = new VaultsPage()

const getLocation = ClientFunction(() => document.location.href)

Given('I see the landing page of Akord app', async t => {
  await openLoginPage(t)
})

When('I click the login button', async t => {
  await clickLoginButton(t)
})

When('I fill in the login form with valid user', async t => {
  await fillUsernameAndPassword(t)
})

When('I fill in the login form with invalid user', async t => {
  await fillUsernameAndPassword(t, false)
})

Then('I see the vaults page', async t => {
  await t.expect(getLocation()).contains(vaultsPage.url, "Vaults page is not loaded", { timeout: 10000 })
})

Then('I see a login error message', async t => {
  await t.expect(loginPage.loginErrorMessage.exists).ok()
})

Then('I do not see login error message', async t => {
  await t.expect(loginPage.loginErrorMessage.exists).notOk()
})
