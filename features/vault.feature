@only
@login_keep_me_signed_in
Feature: Vault create and remove

  Scenario: Create & Remove Vault
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
    When I click on the vault
    And I click on vault menu
    Then I see archive vault action
    When I click on archive the vault
    Then I see the confirm archive dialog
    When I click on archive vault button
    Then I see the archived vault
    When I click on the vault
    And I click on menu
    Then I see remove vault action
    When I click on remove the vault
    Then I see the confirm remove dialog
    When I click on remove vault button
    And I open the vault archived page
    Then I do not see the vault anymore
