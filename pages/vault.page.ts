import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'


const uriId = getEnvironment().url.href === 'https://dev.akord.link/' ? getEnvironment().examplePublicFileUriIdDev : getEnvironment().examplePublicFileUriIdProd 
const examplePublicVaultUri = `public/vaults/active/${uriId}/gallery`
const examplePublicVaultName = "Please don't delete me this time!"

export class VaultPage {
  host: string
  url: string
  urlInactiveVaults: string
  examplePublicVaultUrl: string
  examplePublicVaultName: Selector
  created: Selector
  termsOfAccess: Selector
  message: Selector
  postMessage: Selector
  menuButton: Selector
  menuHeaderButton: Selector
  menu: Selector
  deactivate: Selector
  remove: Selector
  invite: Selector
  manageAccess: Selector
  deactivateVaultModal: Selector
  removeVaultModal: Selector
  deactivateVaultButton: Selector
  removeVaultButton: Selector
  activityTimeline: Selector
  documents: Selector
  addFileHeader: Selector
  uploadEncryptedFilesHeader: Selector
  fileAlreadyExistsHeader: Selector
  inputUploadFile: Selector
  uploadFile: Selector
  upload: Selector
  keepBoth: Selector
  replace: Selector
  inviteVaultMenu: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}`
    this.urlInactiveVaults = `${getEnvironment().url.href}vaults/inactive`
    this.examplePublicVaultUrl = `${getEnvironment().url.href}${examplePublicVaultUri}`
    this.examplePublicVaultName = Selector('h2')
      .withText(examplePublicVaultName)
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
    this.menuHeaderButton = Selector('button').withAttribute(
      'aria-label',
      'display more actions'
    ).nth(0)
    this.menu = Selector('ul').withAttribute('role', 'menu')
    this.deactivate = Selector('p').withText('Deactivate vault')
    this.remove = Selector('p').withText('Remove vault')
    this.invite = Selector('p').withText('Invite')
    this.manageAccess = Selector('p').withText('Manage access')
    this.activityTimeline = Selector('span').withText('Activity timeline')
    this.documents = Selector('span').withText('Documents')
    this.deactivateVaultModal = Selector('h2')
      .withText('Deactivate vault')
    this.removeVaultModal = Selector('h2')
      .withText('Remove vault')
    this.deactivateVaultButton = Selector('button')
      .withText('Deactivate vault')
    this.removeVaultButton = Selector('button')
      .withText('Remove vault')
    this.addFileHeader = Selector('h1')
      .withText('Upload with end-to-end encryption')
    this.uploadFile = Selector('span')
      .withText('Upload a file').nth(1)
    this.upload = Selector('button')
      .withText('Upload')
    this.uploadEncryptedFilesHeader = Selector('p').withText('Upload encrypted files')
    this.inputUploadFile = Selector('#contained-button-file')
    this.fileAlreadyExistsHeader = Selector('p').withText('File already exists')
    this.keepBoth = Selector('button').withText('Keep both')
    this.replace = Selector('button').withText('Replace')
    this.inviteVaultMenu = Selector('p').withText('Invite')
  }

  findMessagePosted(message: string): Selector {
    return Selector('p').withText(message)
  }
}
