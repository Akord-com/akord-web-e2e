@dev @prod
Feature: Redirect to storage page
  
  Scenario: Redirect to storage page after login
    Given I open storage page
    Then I see a login landing page
    When I fill in the login form with valid user
    And I click the login button
    Then I see the storage page