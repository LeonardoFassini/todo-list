Feature: Todo
  Eu quero poder gerenciar os meus todos

  Background: Logging in
    Given I am logged in

  Scenario: List all todos
    Given I am at the todo page
    Then There should be a list of todos

  Scenario: Clicking on a unchecked todo checks it
    Given I am at the todo page
    When I click on a unchecked todo
    Then The todo should be checked

  Scenario: Clicking on a checked todo unchecks it
    Given I am at the todo page
    When I click on a checked todo
    Then The todo should be unchecked
