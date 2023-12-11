import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class VaultsPage {
  host: string
  url: string
  vaultsHeader: Selector
  addVaultButton: Selector
  table: Selector
  row: Selector
  active: Selector
  archived: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}vaults/active`
    this.vaultsHeader = Selector('h2').withText('Vaults')
    this.addVaultButton = Selector('button').withText('New vault')
    this.table = Selector('table')
    this.row = Selector('table > tbody > tr')
    this.active = Selector('span').withExactText('Active')
    this.archived = Selector('span').withExactText('Archived')
  }

  findRow(id: string): Selector {
    try {
      return Selector('p').withExactText(id)
    } catch (err) {
      console.log(err)
    }
    return Selector('p');
  }
}
