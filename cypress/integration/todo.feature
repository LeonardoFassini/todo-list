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

  Scenario: Add a new todo
    Given I am at the todo page
    When I click to add a new todo
    And I type on the todo name "New todo"
    And I type on the todo description "Description"
    And I click to save
    Then A new todo should be created

  Scenario: Remove a todo
    Given I am at the todo page
    When I click to remove a todo
    Then The todo should be removed
