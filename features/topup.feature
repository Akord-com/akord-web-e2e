@dev
Feature: Top up
  
  @login_keep_me_signed_in
  Scenario: Add permanent storage after payment
    Given I open storage page
    Then I see the storage page
    And I see the storage available
    When I click on the top up button
    Then I see the top up page
    When I click on the review payment button
    Then I see the review payment modal
    When I click on the pay button
    Then I see the storage page
    And I see the storage available after topup
    And I see the storage increase
