import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class StoragePage {
  host: string
  url: string
  storageHeader: Selector
  availableBadge: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}storage`
    this.storageHeader = Selector('h2').withText('Storage')
    this.availableBadge = Selector('span').withText('AVAILABLE')
  }

}
