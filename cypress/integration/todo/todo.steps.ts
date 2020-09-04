import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { commonSteps } from '../common';

commonSteps();

Before(() => {
  cy.server();
  cy.route('GET', '**/todos/list', 'fixture:todos-list.json');
  cy.route('POST', '**/todos/check/1', 'fixture:todos-check.json');
  cy.route('POST', '**/todos/check/2', 'fixture:todos-uncheck.json');
});

Given('I am at the todo page', () => {
  cy.visit('/todo');
});

Given(/I click on a (unchecked|checked) todo/, (checkboxType: 'unchecked' | 'checked') => {
  const dataToSearch = checkboxType === 'checked' ? 'checkboxChecked' : 'checkboxUnchecked';
  const indexToUse = checkboxType === 'checked' ? 1 : 0;
  cy.get('[data-test=todoItem]').eq(indexToUse).find(`[data-test=${dataToSearch}]`).should('exist');
  cy.get('[data-test=todoItem]').eq(indexToUse).find(`[data-test=${dataToSearch}]`).click();
});

Then('There should be a list of todos', () => {
  cy.get('[data-test=todoItem]').its('length').should('be.greaterThan', 0);
});

Then(/The todo should be (unchecked|checked)/, (checkboxType: 'unchecked' | 'checked') => {
  const dataToSearch = checkboxType === 'checked' ? 'checkboxChecked' : 'checkboxUnchecked';
  const indexToUse = checkboxType === 'checked' ? 0 : 1;
  cy.get('[data-test=todoItem]').eq(indexToUse).find(`[data-test=${dataToSearch}]`).should('exist');
});
