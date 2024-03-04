import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class InvitePage {
  host: string
  uri: string
  headerText: string
  memberName: string
  memberEmail: string
  message: string
  expirationDate: string

  header: Selector
  inviteButton: Selector
  generateLinkButton: Selector
  inviteModal: Selector
  selectAirdropAccess: Selector
  selectExpirationDate: Selector
  generatedLink: string
  airdropAccessLinkHeaderSelector: Selector
  generatedLinkSelector: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.uri =  '/invite-to-vault'
    this.headerText = 'Invite to vault'
    this.header = Selector('h2').withText(this.headerText)
    this.message = '#enter-message'
    this.memberName = '#enter-email-0'
    this.expirationDate = '#expiration-date'
    this.generatedLink = '#text'
    this.airdropAccessLinkHeaderSelector = Selector('h3').withText('Airdrop access link')
    this.generatedLinkSelector = Selector('p').withText('vaults/active')
    this.selectExpirationDate = Selector(this.expirationDate)

    this.inviteButton = Selector('button').withText('Invite to vault')
    this.generateLinkButton = Selector('button').withText('Generate link')
    this.selectAirdropAccess = Selector("input[name='airdropChecked']")
  }
}