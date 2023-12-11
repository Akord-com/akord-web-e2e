import { Before } from '@cucumber/cucumber';
import { VaultsPage } from '../pages/vaults.page';
import { AddVaultPage } from '../pages/add-vault.page';
import { VaultPage } from '../pages/vault.page';

const vaultsPage = new VaultsPage();
const vaultPage = new VaultPage();
const addVaultPage = new AddVaultPage();
const TEST_VAULT_NAME = Math.random().toString(36).substr(2, 10);
const TEST_MESSAGE = 'test message'


Before('@vault', async (t) => {
  await openVaultsPage(t)
  await clickAddVaultButton(t)
  await fillVaultName(t)
  await clickCreateVaultButton(t)
});

export async function openVaultsPage(t: TestController) {
  await t.navigateTo(vaultsPage.url);
}

export async function fillVaultName(t: TestController) {
  await t
    .typeText(addVaultPage.vaultName, TEST_VAULT_NAME, { paste: false })
}

export async function clickArchived(t: TestController) {
  await t.click(vaultsPage.archived);
}

export async function clickAddVaultButton(t: TestController) {
  await t.click(vaultsPage.addVaultButton);
}

export async function clickCreateVaultButton(t: TestController) {
  await t.click(vaultsPage.addVaultButton);
}

export async function clickVaultName(t: TestController) {
  await t.click(vaultsPage.findRow(TEST_VAULT_NAME));
}

export async function clickMenu(t: TestController) {
  await t.click(vaultPage.menuButton);
}

export async function clickArchive(t: TestController) {
  await t.click(vaultPage.archive);
}

export async function postTestMessage(t: TestController) {
  await t
    .typeText(vaultPage.message, TEST_MESSAGE, { paste: false })
  await t.click(vaultPage.postMessage)
}

export async function findTestVault() {
  return vaultsPage.findRow(TEST_VAULT_NAME);
}

export async function findTestMessagePosted(t: TestController) {
  return vaultPage.findMessagePosted(TEST_MESSAGE)
}

export async function clickConfirmArchive(t: TestController) {
  await t.click(vaultPage.archiveVaultButton);
}
