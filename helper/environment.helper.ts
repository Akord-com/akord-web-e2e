export function getEnvironment() {
  return {
    username: process.env.E2E_USERNAME || 'e2eweb@akord.com',
    password: process.env.E2E_PASSWORD || 'HuuuugeOverflow',
    url: new URL(process.env.E2E_URL || 'https://dev.akord.link'),
    mailSlurpToken: 'cf4120cde4fe454f7fc729f89e90cb6ef399e7ba13c7061b5f6af12c31f3594e',
    examplePublicFileUriIdDev: 'oB-EJlkSippWrF0fkf6s24mHlbw9Lx5TvvFKugVJQmA',
    examplePublicFileUriIdProd: 'wWR_iLL5ebsv_r09GZdM6APxYgblSYlOueWjJYC3r2Q'
  };
}
