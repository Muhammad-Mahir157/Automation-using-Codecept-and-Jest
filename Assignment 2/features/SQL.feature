Feature: SQL Query Select
    Background:
        Given Login with username and password
          | username | password |
          | hmmahir2001@gmail.com | sample-098 |

  Scenario: Create SQL Query
      Given I click on New button
      When I click on SQL Query button
      Then I should see SQL Query page
      When I write
      Then I see text
      Then I see Variables
      Then I click on Variable Type button