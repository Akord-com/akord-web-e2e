import { getEnvironment } from '../helper/environment.helper'
import { Selector } from 'testcafe'

const examplePublicFileUri = 'public/vaults/active/oB-EJlkSippWrF0fkf6s24mHlbw9Lx5TvvFKugVJQmA/gallery'
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
