import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class AddVaultPage {
  host: string
  url: string
  privacyUrl: string
  addVaultHeader: Selector
  allClearPage: Selector
  vaultsCreateHeader: Selector
  chooseStorageType: Selector
  vaultsHeader: Selector
  addVaultButton: Selector
  selectCloudStorage: Selector
  selectBlockchainStorage: Selector
  selectPrivateVault: Selector
  selectPublicVault: Selector
  choosePrivacySettings: Selector
  next: Selector
  vaultName: string
  vaultDescription: string
  vaultTags: string
  createVaultButton: Selector
  table: Selector
  row: Selector
  deactivateVaultMenu: Selector
  removeVaultMenu: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.vaultsCreateHeader = Selector('h1').withText('Create your first vault')
    this.chooseStorageType = Selector('span').withText('Choose the type of storage for your vault.')
    this.choosePrivacySettings = Selector('span').withText('Choose the privacy setting for your vault.')
    this.vaultsHeader = Selector('h2').withText('Vaults')
    this.addVaultButton = Selector('button').withText('Create vault')
    this.selectCloudStorage = Selector('#main .PrivateSwitchBase-input.css-1m9pwf3').nth(1)
    this.selectBlockchainStorage = Selector('#main .PrivateSwitchBase-input.css-1m9pwf3')
    this.selectPrivateVault = Selector('#main .PrivateSwitchBase-input.css-1m9pwf3')
    this.selectPublicVault = Selector('#main .PrivateSwitchBase-input.css-1m9pwf3').nth(1)
    this.next = Selector('button').withText('Next')
    this.url = `${getEnvironment().url.href}create-vault`
    this.privacyUrl = `${getEnvironment().url.href}create-vault/privacy`
    this.addVaultHeader = Selector('h2').withText('Create a new vault')
    this.vaultName = '#enter-title'
    this.vaultDescription = '#enter-description'
    this.vaultTags = '#tags-input'
    this.createVaultButton = Selector('button').withText('Create vault')
    this.deactivateVaultMenu = Selector('p').withText('Deactivate vault')
    this.removeVaultMenu = Selector('p').withText('Remove vault')
    this.allClearPage = Selector('h1').withText('All clear')
  }
}
