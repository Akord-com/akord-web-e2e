import { Given, Then, When } from '@cucumber/cucumber'
import { ClientFunction } from 'testcafe'
import {
  clickAddVaultButton,
  fillVaultName,
  clickCreateVaultButton,
  findTestVault,
  clickVaultName,
  postTestMessage,
  findTestMessagePosted,
  clickMenu,
  clickArchive,
  clickConfirmArchive,
  openVaultsPage,
  clickArchived,
  clickNext,
  clickCloudStorage,
  clickPrivateVault,
  fillDescription,
  fillVaultTags,
  clickRemove,
  clickConfirmRemove,
  clickUpload,
  findUploadedFile,
  clickVaultMenu
} from '../hooks/vault.hook'
import { VaultsPage } from '../pages/vaults.page'
import { AddVaultPage } from '../pages/add-vault.page'
import { VaultPage } from '../pages/vault.page'

const vaultsPage = new VaultsPage()
const addVaultsPage = new AddVaultPage()
const vaultPage = new VaultPage()

const getLocation = ClientFunction(() => document.location.href)

Given('I see the vault page', async t => {
  await t.expect(getLocation()).contains(vaultsPage.url)
  await t.expect(vaultsPage.vaultsHeader.exists).ok({ timeout: 2000 })
})

Given('I open public vault page', async t => {
  await t.navigateTo(vaultPage.examplePublicVaultUrl);
})

Given('I open the vault archived page', async t => {
  await t.navigateTo(vaultPage.urlArchived);
})

Then('I see create the first vault page', async t => {
  await t.expect(vaultsPage.vaultsCreateHeader.exists).ok({ timeout: 2000 })
})

When('I click on add vault button', async t => {
  await clickAddVaultButton(t)
})

When('I put the name of the vault', async t => {
  await fillVaultName(t)
  await t.wait(5000)
})

When('I click on create vault button', async t => {
  await clickCreateVaultButton(t)
  await t.wait(5000)
})

When('I click on the vault', async t => {
  await clickVaultName(t)
})

When('I select cloud storage', async t => {
  await clickCloudStorage(t)
})

Then('I see add file page', async t => {
  await t.expect(vaultPage.addFileHeader.exists).ok()
})

Then('I see upload encrypted files', async t => {
  await t.expect(vaultPage.uploadEncryptedFilesHeader.exists).ok({ timeout: 2000 })
})

When('I click on upload dialog box', async t => {
  await clickUpload(t)
  await t.wait(5000)
})

When('I click on upload a file', async t => {
  await t
    .setFilesToUpload(vaultPage.inputUploadFile, [
      '../static/akord.png',
    ])
})

Then('I see choose the privacy setting for your vault', async t => {
  await t.expect(getLocation()).contains(addVaultsPage.privacyUrl)
  await t.expect(addVaultsPage.choosePrivacySettings.exists).ok()
})

When('I select private', async t => {
  await clickPrivateVault(t)
})

Then('I click on next', async t => {
  await clickNext(t)
})

Then('I see create new vault', async t => {
  await t.expect(getLocation()).contains(addVaultsPage.url)
})

When('I post the message', async t => {
  await postTestMessage(t)
})

When('I click on menu', async t => {
  await clickMenu(t)
})

When('I click on vault menu', async t => {
  await clickVaultMenu(t)
})

When('I click on archive the vault', async t => {
  await clickArchive(t)
})

When('I click on remove the vault', async t => {
  await clickRemove(t)
})

When('I click on archive vault button', async t => {
  await clickConfirmArchive(t)
})

When('I click on remove vault button', async t => {
  await clickConfirmRemove(t)
})

When('I refresh the page', async t => {
  await t.eval(() => location.reload())
  await t.wait(2000)
})

Then('I see archive vault action', async t => {
  await t.expect(addVaultsPage.archiveVaultMenu.exists).ok()
})

When('I open the page in new window', async t => {
  await t.openWindow(vaultsPage.url)
})

Then('I see add new vault page', async t => {
  await t.expect(getLocation()).contains(addVaultsPage.url)
  await t.expect(addVaultsPage.addVaultHeader.exists).ok()
})

Then('I see all clear page', async t => {
  await t.expect(addVaultsPage.allClearPage.exists).ok()
})

Then('I do not see the vault anymore', async t => {
  await t.expect((await findTestVault()).exists).notOk()
})

Then('I see choose the type of storage for your vault', async t => {
  await t.expect(addVaultsPage.chooseStorageType.exists).ok()
})

When('I put the title of the vault', async t => {
  await fillVaultName(t)
})

When('I put description', async t => {
  await fillDescription(t)
})

When('I put the tag', async t => {
  await fillVaultTags(t)
})

Then('I see the list of vaults', async t => {
  await t.expect(vaultsPage.vaultsHeader.exists).ok()
  await t.expect(vaultsPage.table.exists).ok()
})

Then('I see the vaults page', async t => {
  await t.expect(getLocation()).contains(vaultsPage.url)
})

Then('I see new vault created', async t => {
  await t.expect((await findTestVault()).exists).ok()
})

Then('I see uploaded file', async t => {
  await t.expect((await findUploadedFile()).exists).ok({ timeout: 3000 })
})

Then('I see vault page', async t => {
  await t.expect(getLocation()).contains(vaultPage.url)
  await t.expect(vaultPage.postMessage.exists).ok()
  await t.expect(vaultPage.termsOfAccess.exists).ok()
  await t.expect(vaultPage.created.exists).ok()
})

Then('I see message posted', async t => {
  await t.expect((await findTestMessagePosted(t)).exists).ok()
})

Then('I see the menu', async t => {
  await t.expect(vaultPage.menu.exists).ok()
})

Then('I see the confirm archive dialog', async t => {
  await t.expect(vaultPage.archiveVaultModal.exists).ok({ timeout: 2000 })
})

Then('I see the confirm remove dialog', async t => {
  await t.expect(vaultPage.removeVaultModal.exists).ok({ timeout: 2000 })
})

Then('I see the archived vault', async t => {
  await openVaultsPage(t)
  await clickArchived(t)
  await t.expect((await findTestVault()).exists).ok({ timeout: 5000 })
})

Then('I see remove vault action', async t => {
  await t.expect(addVaultsPage.removeVaultMenu.exists).ok({ timeout: 2000 })
})

Then('I see public vault page', async t => {
  await t.expect(vaultPage.examplePublicVaultName.exists).ok({ timeout: 5000 })
})
