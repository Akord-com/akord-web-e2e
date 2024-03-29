import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

const uriId = getEnvironment().url.href === 'https://dev.akord.link/' ? getEnvironment().examplePublicFileUriIdDev : getEnvironment().examplePublicFileUriIdProd 
const examplePublicFileUri = `public/vaults/active/${uriId}/gallery`
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
