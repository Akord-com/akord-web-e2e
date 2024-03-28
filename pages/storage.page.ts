import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

export class StoragePage {
  host: string
  url: string
  storageHeader: Selector
  permStorageSection: Selector
  cloudStorageSection: Selector
  topUpButton: Selector;
  availableStorage: Selector;
  availableStorageId = '#storage-available-cloud';

  constructor() {
    this.host = getEnvironment().url.hostname
    this.url = `${getEnvironment().url.href}storage`
    this.storageHeader = Selector('h2').withText('Storage')
    this.permStorageSection = Selector('h3').withText('Permanent storage')
    this.cloudStorageSection = Selector('h3').withText('Cloud storage')
    this.storageHeader = Selector('h2').withText('Storage')
    this.availableStorage = Selector(this.availableStorageId)
    this.topUpButton = Selector('button').withText('Top up')
  }

}
