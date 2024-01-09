@only
Feature: Sign up

  Scenario: Sign up
    Given I see the landing page of Akord app
    When I click the sign up link
    Then I see the sign up page
    When I fill in the sign up form with valid user data
    And I tick the terms and conditions checkbox
    And I tick the withdrawal consent checkbox
    And I click on next button
    Then I see the signup verification page
    When I click on setup account button
    Then I see the sign up success page
