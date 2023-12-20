@only
Feature: Redirect to storage page
  
  Scenario: Redirect to strage page
    Given I open storage page
    Then I see the landing page of Akord app
    When I fill in the login form with valid user
    And I click the login button
    Then I see the storage page