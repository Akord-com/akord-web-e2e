@dev @prod
Feature: Upload file to vault
  
  @vault_on
  Scenario: Upload file to vault
    Given I see the vaults page
    And I see new vault created
    When I click on the vault
    Then I see add file page
    When I click on upload a file
    Then I see upload encrypted files modal
    When I click on upload dialog box
    Then I see uploaded file
  
  @login_keep_me_signed_in
  Scenario: Upload the same file to vault and keep both
    When I go to the vaults page
    And I see new vault created
    When I click on the vault
    When I click on upload a file
    Then I see file already exits modal
    When I click on keep both
    Then I see upload encrypted files modal
    When I click on upload dialog box
    Then I see uploaded file duplicate

  @login_keep_me_signed_in @vault_off
  Scenario: Upload the same file to vault and replace it
    When I go to the vaults page
    And I see new vault created
    When I click on the vault
    When I click on upload a file
    Then I see file already exits modal
    When I click on replace
    Then I see upload encrypted files modal
    When I click on upload dialog box
    Then I see uploaded file with two versions
