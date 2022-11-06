Feature: SQL Editor
  Verify SQL Editor Text Editor Functionality

  Scenario: User is able to use the SQL editor for queries.
    Given I have already added database and i am on hompage
    When I click the New button
    And I select SQL query from the drop down menu
    Then the query editor should open And I should be able to write queries
      | queries |
      | select * from table; | 

 