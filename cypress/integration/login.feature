Feature: Login
  Eu quero logar na aplicação

  Scenario: Log in successful
    Given I am at the login page
    When I type the correct username
    And I type the correct password
    And I click to log in
    Then I should be on the todo page