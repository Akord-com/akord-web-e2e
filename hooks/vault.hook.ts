import { After, Before } from '@cucumber/cucumber';
import { VaultsPage } from '../pages/vaults.page';
import { AddVaultPage } from '../pages/add-vault.page';
import { VaultPage } from '../pages/vault.page';

const vaultsPage = new VaultsPage();
const vaultPage = new VaultPage();
const addVaultPage = new AddVaultPage();
const TEST_VAULT_NAME = Math.random().toString(36).substr(2, 10);
const TEST_UPLOAD_FILE = "akord.png"
const TEST_UPLOAD_FILE_DUPLICATE = "akord copy.png"
const TEST_MESSAGE = 'test message'


Before('@vault_on', async (t) => {
  await openVaultsPage(t)
  await clickAddVaultButton(t)
  await clickCloudStorage(t);
  await clickNext(t);
  await clickPrivateVault(t);
  await clickNext(t);
  await fillVaultName(t)
  await fillDescription(t);
  await fillVaultTags(t);
  await clickCreateVaultButton(t)
});

After('@vault_off', async (t) => {
  await openVaultsPage(t)
  await clickVaultName(t);
  await clickVaultMenu(t);
  await clickDeactivate(t);
  await clickConfirmDeactivate(t);
  await openVaultsPage(t)
  await clickInactiveVaultsPage(t);
  await clickMenu(t);
  await clickRemove(t);
  await clickConfirmRemove(t);
});

export async function openVaultsPage(t: TestController) {
  await t.navigateTo(vaultsPage.url);
}

export async function fillVaultName(t: TestController) {
  await t
    .typeText(addVaultPage.vaultName, TEST_VAULT_NAME, { paste: false })
}

export async function fillDescription(t: TestController) {
  await t
    .typeText(addVaultPage.vaultDescription, 'description', { paste: false })
}

export async function fillVaultTags(t: TestController) {
  await t
    .typeText(addVaultPage.vaultTags, 'test-tag,', { paste: false })
}

export async function clickInactiveVaultsPage(t: TestController) {
  await t.click(vaultsPage.inactive);
}

export async function clickAddVaultButton(t: TestController) {
  await t.click(vaultsPage.addVaultButton);
}

export async function clickCreateVaultButton(t: TestController) {
  await t.click(vaultsPage.createVaultButton);
}

export async function clickVaultName(t: TestController, name?: string) {
  await t.wait(3000);
  await t.click(vaultsPage.findVault(name || TEST_VAULT_NAME));
}

export async function clickVaultMenu(t: TestController) {
  await t.click(vaultPage.menuHeaderButton);
}

export async function clickMenu(t: TestController) {
  await t.click(vaultPage.menuButton);
}

export async function clickDeactivate(t: TestController) {
  await t.click(vaultPage.deactivate);
}

export async function clickInvite(t: TestController) {
  await t.click(vaultPage.invite);
}

export async function clickUpload(t: TestController) {
  await t.click(vaultPage.upload);
}

export async function clickRemove(t: TestController) {
  await t.click(vaultPage.remove);
}

export async function clickCloudStorage(t: TestController) {
  await t.click(addVaultPage.selectCloudStorage);
}

export async function clickUploadFile(t: TestController) {
  await t.click(vaultPage.uploadFile);
}

export async function clickPrivateVault(t: TestController) {
  await t.click(addVaultPage.selectPrivateVault);
}

export async function clickNext(t: TestController) {
  await t.click(addVaultPage.next);
}

export async function postTestMessage(t: TestController) {
  await t
    .typeText(vaultPage.message, TEST_MESSAGE, { paste: false })
  await t.click(vaultPage.postMessage)
}

export async function findTestVault() {
  return vaultsPage.findVault(TEST_VAULT_NAME);
}

export async function findUploadedFile() {
  return vaultsPage.findVault(TEST_UPLOAD_FILE);
}

export async function findUploadedFileDuplicate() {
  return vaultsPage.findVault(TEST_UPLOAD_FILE_DUPLICATE);
}

export async function findFileWithTwoVersions() {
  return vaultsPage.findStackByVersionsNumber("2");
}

export async function findTestMessagePosted(t: TestController) {
  return vaultPage.findMessagePosted(TEST_MESSAGE)
}

export async function clickConfirmDeactivate(t: TestController) {
  await t.click(vaultPage.deactivateVaultButton);
}

export async function clickConfirmRemove(t: TestController) {
  await t.click(vaultPage.removeVaultButton);
}
