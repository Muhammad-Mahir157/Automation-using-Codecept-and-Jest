Feature: SQL Query Select
  Background: 
      Given Login with username and password
      | username | password |
      | m.mhad.chdry@gmail.com | m.mahad12 |

  Scenario: Create SQL Query
      Given I click on New button
      When I click on SQL Query button
      Then I should see SQL Query page
      When I write
      Then I see text
      Then I see Variables
      Then I click on Variable Type button
      #Then I should Change variable types 

#    Scenario: Change Variable Type
#       Given I am on SQL Query page
#       When I click on Variable Type button
#       #Then I should Change vriable types
