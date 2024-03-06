import { Selector } from 'testcafe';
import { getEnvironment } from '../helper/environment.helper';

export class TopUpPage {
  url: string;
  host: string;
  billingDetails: Selector;
  reviewButton: Selector;
  payButton: Selector;
  billingDetailsId = '#billing-data';

  constructor() {
    this.host = getEnvironment().url.hostname;
    this.url = `${getEnvironment().url.href}top-up`
    this.billingDetails = Selector(this.billingDetailsId);
    this.reviewButton = Selector('button').withText('Review and make payment');
    this.payButton = Selector('button').withText('Pay');
  }
}
