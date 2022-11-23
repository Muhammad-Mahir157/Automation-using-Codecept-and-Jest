Feature: Dashboard
  Verify New Dashboard Functionality
  Background:
    Given Login with username and password
      | username | password |
      | hmmahir2001@gmail.com | sample-098 |

  Scenario: Create a New Dashboard
    Given I navigate on home page
    When I select Dashboard
    Then I should see the new Dashboard 
    Then I should be able to edit the dashboard
    Then I should be able to add text cards
    Then I should be able to add text to the text cards
    Then I should see the saved Dashboard
  