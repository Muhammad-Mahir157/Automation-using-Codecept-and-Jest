Feature: Login
  Verify Login Functionality

  Scenario: Perform login operation
    Given I navigate on login page
    Given Login with username and password
      | username | password |
      | hammad@gmail.com | hammad123 |

    And I click login button
    Then I should see login 
