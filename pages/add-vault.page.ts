import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class AddVaultPage {
  host: string
  url: string
  addVaultHeader: Selector
  vaultName: string
  createVaultButton: Selector
  table: Selector
  row: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}add-vault`
    this.addVaultHeader = Selector('h2').withText('Create a new vault')
    this.vaultName = '#enter-title'
    this.createVaultButton = Selector('button').withText('Create vault')
  }
}
