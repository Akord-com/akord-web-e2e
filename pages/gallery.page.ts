import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

const examplePublicFileUri = 'public/vaults/active/8f2a6919-9a9a-4c08-8d69-0195e6a80ab5/gallery'
const examplePublicFileName = 'akord_logo.jpg'

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
