[dev] [![Run DEV E2E Tests](https://github.com/Akord-com/akord-web-e2e/actions/workflows/run-dev-test.yml/badge.svg)](https://github.com/Akord-com/akord-web-e2e/actions/workflows/run-dev-test.yml)
[prod] [![Run V2 E2E Tests](https://github.com/Akord-com/akord-web-e2e/actions/workflows/run-v2-test.yml/badge.svg)](https://github.com/Akord-com/akord-web-e2e/actions/workflows/run-v2-test.yml)
# akord-web-e2e
E2e test set for akord.com


## Running end-to-end tests

Testcafe is used for running e2e tests. The tests are written in Cucumber/Gherkin.

Tests are excuted against working environment. By default the environment under tests is `localhost:3000`. This can be altered over env variable: `E2E_URL` e.g. `E2E_URL=https://dev.akord.link`

To run e2e tests:
`npm run e2e`

To debug e2e tests:
`npm run e2e:debug`

To run in headless mode (for CI builds):
`npm run e2e:headless`

### Running only specific end-to-end test

If you want to run only specific features of the whole e2e suite add a tag to them. E.g.

```
@login  @only
Feature: Vault

  Scenario: Create vault
    Given I see the vault page
...
```

Then you can start the e2e tests with the option `--tags @only` or run `npm run e2e:only`

### Generate cucumber stub

```
npx cucumber-js --format-options '{"snippetInterface": "async-await"}' e2e/features/feature.feature > e2e/steps/feature.steps.ts
```
