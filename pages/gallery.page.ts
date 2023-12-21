import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

const examplePublicFileUri = 'public/vaults/active/26470a32-888b-4c6d-86bb-89395a8de177/gallery'
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
