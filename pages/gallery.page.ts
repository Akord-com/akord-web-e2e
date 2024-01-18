import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

const examplePublicFileUri = 'public/vaults/active/7600c67f-b36a-43e8-9825-c8154385eaf7/gallery'
const examplePublicFileName = 'akord.png'

export class GalleryPage {
  host: string
  uri: string
  examplePublicFileUrl: string
  examplePublicFileTitle: Selector

  constructor() {
    this.host = getEnvironment().url.hostname
    this.uri = `/gallery`
    this.examplePublicFileUrl = `${getEnvironment().url.href}${examplePublicFileUri}`
    this.examplePublicFileTitle = Selector('p').withText(examplePublicFileName)
  }
}
