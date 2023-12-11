@login_keep_me_signed_in @only
Feature: Vault

  Scenario: Create vault post
    Given I see the vault page
    When I click on add vault button
    Then I see choose the type of storage for your vault
    When I select cloud storage
    And I click on next
    Then I see choose the privacy setting for your vault
    When I select private
    And I click on next
    Then I see create new vault
    When I put the title of the vault
    And I put description
    And I put the tag
    And I click on create vault button
    Then I see the vaults page
    And I see new vault created