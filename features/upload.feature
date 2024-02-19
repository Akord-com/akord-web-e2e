@login_keep_me_signed_in @dev @prod
Feature: Upload file to vault
  
  @vault 
  Scenario: Upload file to vault
    Given I see the vault page
    And I see new vault created
    When I click on the vault
    Then I see add file page
    When I click on upload a file
    Then I see upload encrypted files
    When I click on upload dialog box
    Then I see uploaded file