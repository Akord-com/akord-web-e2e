import { Given, Then } from '@cucumber/cucumber'
import { GalleryPage } from '../pages/gallery.page'

const galleryPage = new GalleryPage()

Given('I open gallery page with public file', async t => {
  await openGalleryWithPublicFile(t)
})

Then('I see public file in gallery', async t => {
  await t.expect(galleryPage.examplePublicFileTitle.exists).ok({ timeout: 5000 })
})


export async function openGalleryWithPublicFile(t: TestController) {
  await t.navigateTo(galleryPage.examplePublicFileUrl);
}