import { Selector } from 'testcafe';
import { getEnvironment } from '../helper/environment.helper';

export class BillingPage {
  url: string;
  host: string;
  billingDetailsId = '#billing-data';
  billingDetails: Selector;
  editBillingDetailsId = '#edit-billing-data';
  editBillingDetailsButton: Selector;
  billingNameInput: Selector;
  saveBillingDetailsButton: Selector;

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}account/plans-and-payments/billing-and-payment-details`
    this.billingDetails = Selector(this.billingDetailsId);
    this.editBillingDetailsButton = Selector(this.editBillingDetailsId);
    this.billingNameInput = Selector("input[name='name']");
    this.saveBillingDetailsButton = Selector('button').withText('Save billing data');
  }
}
