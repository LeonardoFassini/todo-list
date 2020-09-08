import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { commonSteps } from '../common';

commonSteps();

Before(() => {
  cy.server();
  cy.route('GET', '**/todos/list', 'fixture:todos-list.json');
  cy.route('POST', '**/todos/check/1', 'fixture:todos-check.json');
  cy.route('POST', '**/todos/check/2', 'fixture:todos-uncheck.json');
  cy.route('POST', '**/todos/add', 'fixture:todos-add.json');
  cy.route('POST', '**/todos/remove/1', 'fixture:todos-remove.json');
});

Given('I am at the todo page', () => {
  cy.visit('/todo');
  cy.get('[data-test=todoItem]').its('length').as('todoCount');
});

When(/I click on a (unchecked|checked) todo/, (checkboxType: 'unchecked' | 'checked') => {
  const dataToSearch = checkboxType === 'checked' ? 'checkboxChecked' : 'checkboxUnchecked';
  const indexToUse = checkboxType === 'checked' ? 1 : 0;
  cy.get('[data-test=todoItem]').eq(indexToUse).find(`[data-test=${dataToSearch}]`).should('exist');
  cy.get('[data-test=todoItem]').eq(indexToUse).find(`[data-test=${dataToSearch}]`).click();
});

When('I click to add a new todo', () => {
  cy.get('[data-test=createTodo]').click();
});

When('I type on the todo name {string}', (todoName: string) => {
  cy.get('[data-test=todoName]').click().type(todoName);
});

When('I type on the todo description {string}', (todoDescription: string) => {
  cy.get('[data-test=todoDescription').click().type(todoDescription);
});

When('I click to save', () => {
  cy.get('[data-test=saveTodo]').click();
});

When('I click to remove a todo', () => {
  cy.get('[data-test=deleteTodo]').first().click();
});

Then('There should be a list of todos', () => {
  cy.get('[data-test=todoItem]').its('length').should('be.greaterThan', 0);
});

Then(/The todo should be (unchecked|checked)/, (checkboxType: 'unchecked' | 'checked') => {
  const dataToSearch = checkboxType === 'checked' ? 'checkboxChecked' : 'checkboxUnchecked';
  const indexToUse = checkboxType === 'checked' ? 0 : 1;
  cy.get('[data-test=todoItem]').eq(indexToUse).find(`[data-test=${dataToSearch}]`).should('exist');
});

Then('A new todo should be created', () => {
  cy.get('@todoCount').then((initialCount) => {
    cy.get('[data-test=todoItem]').should('have.length.greaterThan', initialCount);
  });
});

Then('The todo should be removed', () => {
  cy.get('@todoCount').then((initialConunt) => {
    cy.get('[data-test=todoItem]').should('have.length.lessThan', initialConunt);
  });
});
