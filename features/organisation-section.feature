Feature: Organisation section visible after Mountain plan

  Scenario: Organisation section visibility
    Given I see the vaults page
    When I click on the account link
    Then I see the account page
    When I click on plans and payments section
    Then I see plans and payments section
    And I don't see organisation option
    When I click on pricing plans
    Then I see pricing plans and pebble as the current plan 
    Then I see choose the privacy setting for your vault
    When I click on mountain plan upgrade
    Then I see payment section
    When I fill payment data
    And I click on setup plan button
    Then I see mountain plan as a current plan
    When I click on account section
    Then I see the organisation option
    When I click on plans and payments section
    Then I see plans and payments section
    When I click on pricing plans
    Then I see pricing plans and mountain as the current plan 
    When I click on cancel mountain plan
    Then I see end subscription confirmation dialog
    When I click end subscription

