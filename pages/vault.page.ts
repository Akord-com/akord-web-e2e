import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

const examplePublicVaultUri = 'public/vaults/active/NaAZoPgidQGmi8bNZiY3EEq6bCwKhgH3MsvHYQXJHdo/gallery'
const examplePublicVaultName = "me too.. dont't delete us!"

export class VaultPage {
  host: string
  url: string
  urlArchived: string
  examplePublicVaultUrl: string
  examplePublicVaultName: Selector
  created: Selector
  termsOfAccess: Selector
  message: Selector
  postMessage: Selector
  menuButton: Selector
  menuHeaderButton: Selector
  menu: Selector
  archive: Selector
  remove: Selector
  archiveVaultModal: Selector
  removeVaultModal: Selector
  archiveVaultButton: Selector
  removeVaultButton: Selector
  activityTimeline: Selector
  documents: Selector
  addFileHeader: Selector
  uploadEncryptedFilesHeader: Selector
  inputUploadFile: Selector
  uploadFile: Selector
  upload: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}`
    this.urlArchived = `${getEnvironment().url.href}vaults/archived`
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
    this.archive = Selector('p').withText('Archive vault')
    this.remove = Selector('p').withText('Remove vault')
    this.activityTimeline = Selector('span').withText('Activity timeline')
    this.documents = Selector('span').withText('Documents')
    this.archiveVaultModal = Selector('h2')
      .withText('Archive vault')
    this.removeVaultModal = Selector('h2')
      .withText('Remove vault')
    this.archiveVaultButton = Selector('button')
      .withText('Archive vault')
    this.removeVaultButton = Selector('button')
      .withText('Remove vault')
    this.addFileHeader = Selector('h1')
      .withText('Add a file')
    this.uploadFile = Selector('span')
      .withText('Upload a file').nth(1)
    this.upload = Selector('button')
      .withText('Upload')
    this.uploadEncryptedFilesHeader = Selector('p').withText('Upload encrypted files')
    this.inputUploadFile = Selector('#contained-button-file')
  }

  findMessagePosted(message: string): Selector {
    return Selector('p').withText(message)
  }
}
