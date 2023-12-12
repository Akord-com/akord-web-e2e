Feature: Keep me signed in

  @login
  Scenario: No keep me sigend in with refresh
    When I refresh the page
    Then I see the vaults page


  @login_keep_me_signed_in
  Scenario: Keep me sigend in with refresh
    When I refresh the page
    Then I see the vaults page
