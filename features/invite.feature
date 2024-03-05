@dev @prod @login_keep_me_signed_in
Feature: Invite

  Scenario: Airdrop access to the vault
    Given I see the vaults page
    And I see the private vault
    When I click on the private vault
    And I click on vault menu
    Then I see invite to vault action
    When I click on invite to vault
    Then I see invite page
    When I switch the airdrop access toggle
    And I fill in the expiration date form
    And I fill in the member name form
    When I click the generate link button
    Then I no longer see the generate link button
    Then I see the airdrop access link header
    Then I see the generated link
    Then I navigate to the generated link
    Then I see the invite vault