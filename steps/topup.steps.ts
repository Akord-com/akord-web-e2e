import { When, Then } from '@cucumber/cucumber'
import { StoragePage } from '../pages/storage.page'
import { ClientFunction } from 'testcafe'
import { TopUpPage } from '../pages/topup.page'

const storagePage = new StoragePage()
const topUpPage = new TopUpPage()

let storageAvailable: number = null
let postTopUpStorageAvailable: number = null

const getLocation = ClientFunction(() => document.location.href)

When('I click on the top up button', async t => {
  await t.click(storagePage.topUpButton);
})

When('I click on the review payment button', async t => {
  await t.wait(5000) // wait for the card to be validated by stripe
  await t.click(topUpPage.reviewButton);
})

When('I see the review payment modal', async t => {
  await t.expect(topUpPage.payButton.exists).ok({ timeout: 10000 });
})

When('I click on the pay button', async t => {
  await t.click(topUpPage.payButton);
})

Then('I see the storage available', async t => {
  await t.expect(storagePage.availableStorage.exists).ok({ timeout: 10000 })
  const storageAvailableValue = await storagePage.availableStorage.innerText
  storageAvailable = parseInt(storageAvailableValue)
})

Then('I see the storage available after topup', async t => {
  await t.wait(10000) // wait for the payment webhook to update the storage
  await t.expect(storagePage.availableStorage.exists).ok({ timeout: 10000 })
  const storageAvailableValue = await storagePage.availableStorage.innerText
  postTopUpStorageAvailable = parseInt(storageAvailableValue)
})

Then('I see the storage increase', async t => {
  await t.expect(postTopUpStorageAvailable).gt(storageAvailable)
})

Then('I see the top up page', async t => {
  await t.expect(getLocation()).contains(topUpPage.url)
  await t.expect(topUpPage.billingDetails.exists).ok({ timeout: 10000 })
})

export async function openStoragePage(t: TestController) {
  await t.navigateTo(storagePage.url);
}