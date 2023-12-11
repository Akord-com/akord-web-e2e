import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class VaultPage {
  host: string
  url: string
  created: Selector
  termsOfAccess: Selector
  message: Selector
  postMessage: Selector
  menuButton: Selector
  menu: Selector
  archive: Selector
  archiveVaultModal: Selector
  archiveVaultButton: Selector
  activityTimeline: Selector
  documents: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}`
    this.created = Selector('p').withText('Vault created')
    this.termsOfAccess = Selector('a').withText('Terms of access')
    this.message = Selector('textarea').withAttribute(
      'placeholder',
      'Write an encrypted message…'
    )
    this.postMessage = Selector('button').withText('Post')
    this.menuButton = Selector('button').withAttribute(
      'aria-label',
      'display more actions'
    )
    this.menu = Selector('ul').withAttribute('role', 'menu')
    this.archive = Selector('p').withText('Archive vault')
    this.activityTimeline = Selector('span').withText('Activity timeline')
    this.documents = Selector('span').withText('Documents')
    this.archiveVaultModal = Selector('h3')
      .withText('Archive vault')
      .parent('#form-dialog-title')
    this.archiveVaultButton = Selector('span')
      .withText('Archive vault')
      .parent('button')
  }

  findMessagePosted(message: string): Selector {
    return Selector('p').withText(message)
  }
}
