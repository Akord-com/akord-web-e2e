@login_keep_me_signed_in
Feature: Memo

  Scenario: Create vault post message and archive the vault
    Given I see the vault page
    When I click on add vault button
    Then I see add new vault page
    When I put the name of the vault
    And I click on create vault button
    Then I see the vaults page
    And I see new vault created
    When I click on the vault
    Then I see vault page
    When I post the message
    Then I see message posted
    When I click on menu
    Then I see the menu
    When I click on archive the vault
    Then I see the confirm archive dialog
    When I click on archive vault button
    Then I see the archived vault

