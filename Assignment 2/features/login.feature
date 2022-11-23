Feature: Login
  Verify Login Functionality

  Scenario: Perform login operation
    Given Login with username and password
      | username | password |
      | hmmahir2001@gmail.com | sample-098 |

  Scenario: Perform false login operation
    Given Login with false username and password
      | username | password |
      | hmmahi1@gmail.com | sample-098 |
  

