@dev
Feature: Billing
  
  @login_keep_me_signed_in
  Scenario: Update billing details
    Given I go to billing page
    Then I see the billing page with billing details
    When I click on edit billing details button
    Then I see the edit billing details form
    When I put the new name in the billing details form
    And I click on the save billing details button
    Then I see the billing details updating
    Then I see the billing details updated

