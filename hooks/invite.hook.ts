import { VaultsPage } from '../pages/vaults.page';
import { InvitePage } from '../pages/invite.page';

const MEMBER_NAME = "Jimmy";
const MEMBER_EMAIL = "test1@akord.com";

const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
const MEMBER_EXPIRATION_DATE = tomorrow.toLocaleDateString('en-GB');
const MEMBER_MESSAGE = "Hey there";

const vaultsPage = new VaultsPage();
const invitePage = new InvitePage();

export async function fillMemberName(t: TestController) {
  await t
    .typeText(invitePage.memberName, MEMBER_NAME, { paste: false })
}

export async function fillMemberEmail(t: TestController) {
  await t
    .typeText(invitePage.memberEmail, MEMBER_EMAIL, { paste: false })
}

export async function fillExpirationDate(t: TestController) {
  await t
    .typeText(invitePage.selectExpirationDate, MEMBER_EXPIRATION_DATE, { paste: true, replace: true })
		.pressKey('enter')
		.pressKey('esc')
		//.expect(invitePage.selectExpirationDate.value).eql(MEMBER_EXPIRATION_DATE);
}

export async function fillEmailMessage(t: TestController) {
  await t
    .typeText(invitePage.message, MEMBER_MESSAGE, { paste: false })
}

export async function clickInviteButton(t: TestController) {
  await t.click(invitePage.inviteButton);
}

export async function clickGenerateLinkButton(t: TestController) {
  await t.click(invitePage.generateLinkButton);
}

export async function switchAirdropAccessToggle(t: TestController) {
  await t.click(invitePage.selectAirdropAccess);
}

export async function noLongerGenerateLinkButton(t: TestController) {
  await t.expect(invitePage.generateLinkButton.exists).notOk({ timeout: 20000 })
}

export async function airdropAccessLinkHeaderExists(t: TestController) {
  await t.expect(invitePage.airdropAccessLinkHeaderSelector.exists).ok({ timeout: 10000 })
}

export async function generatedLinkExists(t: TestController) {
  await t.expect(invitePage.generatedLinkSelector.exists).ok({ timeout: 10000 })
}

export async function goToGeneratedLink(t: TestController) {
  const value = await invitePage.generatedLinkSelector.textContent;
  await t.navigateTo(value);
}
