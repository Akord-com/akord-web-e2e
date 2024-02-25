import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class InvitePage {
  host: string
  uri: string
  memberName: string
  memberEmail: string
  message: string
  expirationDate: string

  inviteButton: Selector
  generateLinkButton: Selector
  inviteModal: Selector
  selectAirdropAccess: Selector
  selectExpirationDate: Selector
  generatedLink: string
  generatedLinkSelector: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.uri = `/invite-to-vault`
    this.message = '#enter-message'
    this.memberName = '#enter-email-0'
    this.expirationDate = '#expiration-date'
    this.generatedLink = '#text'
    this.generatedLinkSelector = Selector('p').withText('vaults/active')
    this.selectExpirationDate = Selector('#main > div > div > div.MuiBox-root.css-7z1gus > div > div > div.MuiBox-root.css-7elqso > div.MuiBox-root.css-178yklu > div > div > div > div > div > button > svg')

    this.inviteButton = Selector('button').withText('Invite to vault')
    this.generateLinkButton = Selector('button').withText('Generate link')
    this.selectAirdropAccess = Selector('#main > div > div > div.MuiBox-root.css-7z1gus > div > div > div.MuiBox-root.css-7elqso > div.MuiBox-root.css-uewl2b > label')
  }

}