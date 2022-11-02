Feature: Login
  Verify Login Functionality

  Scenario: Perform login operation
    Given I navigate on login page
    Given Login with username and password
      | username | password |
      | random@gmail.com | Q5CpF_27OsGvhR |
    And I click login button
    Then I should see login 
