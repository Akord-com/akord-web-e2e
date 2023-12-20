import { Given, Then } from '@cucumber/cucumber'
import { StoragePage } from '../pages/storage.page'
import { ClientFunction } from 'testcafe'

const storagePage = new StoragePage()

const getLocation = ClientFunction(() => document.location.href)

Given('I open storage page', async t => {
  await openStoragePage(t);
  // await t.expect(getLocation()).contains(storagePage.url)
})

Then('I see the storage page', async t => {
  await t.expect(storagePage.storageHeader.exists).ok({ timeout: 2000 })
  await t.expect(storagePage.availableBadge.exists).ok({ timeout: 2000 })
})


export async function openStoragePage(t: TestController) {
  await t.navigateTo(storagePage.url);
}