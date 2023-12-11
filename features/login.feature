@only
Feature: Login

  Scenario: Successful Login
    Given I see the landing page of Akord app
    And I fill in the login form with valid user
    When I click the login button
    Then I see the vaults page
    And I do not see login error message


  Scenario: Unsuccessful Login
    Given I see the landing page of Akord app
    And I fill in the login form with invalid user
    And I do not see login error message
    When I click the login button
    Then I see a login error message
