import { When, Then } from '@cucumber/cucumber'
import { ClientFunction } from 'testcafe'
import { BillingPage } from '../pages/billing.page'

const billingPage = new BillingPage()

const name: string = Math.random().toString(36).substring(2, 10)

const getLocation = ClientFunction(() => document.location.href)

When('I go to billing page', async t => {
  await t.navigateTo(billingPage.url);
})

Then('I see the billing page with billing details', async t => {
  await t.expect(getLocation()).contains(billingPage.url)
  await t.expect(billingPage.billingDetails.exists).ok({ timeout: 30000 })
})

When('I click on edit billing details button', async t => {
  await t.click(billingPage.editBillingDetailsButton);
})

Then('I see the edit billing details form', async t => {
  await t.expect(billingPage.billingNameInput.exists).ok({ timeout: 10000 })
})

When('I put the new name in the billing details form', async t => {
  await t
  .typeText(billingPage.billingNameInput, name, { paste: false, replace: true})
})

When('I click on the save billing details button', async t => {
  await t.click(billingPage.saveBillingDetailsButton);
})

Then('I see the billing details updating', async t => {
  await t.expect(billingPage.saveBillingDetailsButton.hasAttribute('disabled')).ok({ timeout: 10000 });
})

Then('I see the billing details updated', async t => {
  await t.expect(billingPage.billingNameInput.value).eql(name, { timeout: 10000 });
})