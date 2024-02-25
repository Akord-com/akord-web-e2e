import { When, Then } from '@cucumber/cucumber'
import { Selector } from 'testcafe'
import { clickGenerateLinkButton, clickInviteButton, fillEmailMessage, fillExpirationDate, fillMemberEmail, fillMemberName, generatedLinkExists, goToGeneratedLink, switchAirdropAccessToggle } from '../hooks/invite.hook'
import { clickVaultName } from '../hooks/vault.hook'
import { VaultsPage } from '../pages/vaults.page'

const vaultsPage = new VaultsPage()

const privateVaultName = "Please don't delete me"

When('I fill in the member email form', async t => {
  await fillMemberEmail(t)
})

When('I fill in the member name form', async t => {
  await fillMemberName(t)
})

When('I fill in the email message form', async t => {
  await fillEmailMessage(t)
})

When('I fill in the expiration date form', async t => {
  await fillExpirationDate(t)
})

When('I switch the airdrop access toggle', async t => {
  await switchAirdropAccessToggle(t)
})

When('I click the generate link button', async t => {
  await clickGenerateLinkButton(t)
})

When('I click the invite to vault button', async t => {
  await clickInviteButton(t)
})

Then('I see the private vault', async t => {
  await t.expect(await (vaultsPage.findVault(privateVaultName)).exists).ok();
})

Then('I click on the private vault', async t => {
  await clickVaultName(t, privateVaultName)
})

Then('I see the generated link', async t => {
  await generatedLinkExists(t);
})

Then('I navigate to the generated link', async t => {
  await goToGeneratedLink(t);
})

Then('I see the invite vault', async t => {
  await t.expect(Selector("title").innerText).eql(privateVaultName, undefined, { timeout: 5000 });
})

