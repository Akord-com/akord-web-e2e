@prod
Feature: Sign up and delete account

  Scenario: Sign up and delete account
    Given I see the signup page
    When I fill in the sign up form with valid user data
    And I tick the terms and conditions checkbox
    And I tick the withdrawal consent checkbox
    And I click on next button
    Then I see the signup verification page
    When I click on setup account button
    Then I see the signup success page
    When I confirm email address
    And I put the password and click on login
    Then I see the vaults page

    Given I see the vaults page with 0 vaults
    When I click on the account link
    Then I see the account page
    When I click on the security and privacy link
    Then I see the security and privacy page
    When I click on the delete account link
    Then I see the delete account modal with delete button
    When I click on the delete account button
    Then I see the delete account confirmation