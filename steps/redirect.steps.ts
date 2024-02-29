import { Given, Then } from '@cucumber/cucumber'
import { StoragePage } from '../pages/storage.page'
import { ClientFunction } from 'testcafe'
import { LoginPage } from '../pages/login.page'

const storagePage = new StoragePage()
const loginPage = new LoginPage()

const getLocation = ClientFunction(() => document.location.href)

Given('I open storage page', async t => {
  await openStoragePage(t);
})

Then('I see the storage page', async t => {
  await t.expect(storagePage.storageHeader.exists).ok({ timeout: 10000 })
  await t.expect(storagePage.availableBadge.exists).ok({ timeout: 10000 })
})

Then('I see a login landing page', async t => {
  await t.expect(getLocation()).contains(loginPage.url)
})

export async function openStoragePage(t: TestController) {
  await t.navigateTo(storagePage.url);
}