import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class VaultsPage {
  host: string
  url: string
  vaultsCreateHeader: Selector
  vaultsHeader: Selector
  addVaultButton: Selector
  createVaultButton: Selector
  selectCloudStorage: Selector
  next: Selector
  table: Selector
  row: Selector
  active: Selector
  inactive: Selector
  account: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}vaults/active`
    this.vaultsCreateHeader = Selector('h1').withText('Create your first vault')
    this.vaultsHeader = Selector('h2').withText('Vaults')
    this.addVaultButton = Selector('button').withText('New vault')
    this.createVaultButton = Selector('button').withText('Create vault')
    this.selectCloudStorage = Selector('input').withText('Cloud storage')
    this.next = Selector('button').withText('Next')
    this.table = Selector('table')
    this.row = Selector('table > tbody > tr')
    this.active = Selector('span').withExactText('Active')
    this.inactive = Selector('#room-tab-1').withExactText('Inactive')
    this.account = Selector('span').withExactText('Account')
  }

  findVault(id: string): Selector {
    try {
      return Selector('p').withExactText(id)
    } catch (err) {
      console.log(err)
    }
    return Selector('p');
  }

  findStackByVersionsNumber(versions: string): Selector {
    return Selector('td').withExactText(versions)
  }
}
