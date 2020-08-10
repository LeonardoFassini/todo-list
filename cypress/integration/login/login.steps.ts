import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am at the login page', () => {
  cy.visit('/');
});

When('I type the correct username', () => {
  cy.get('[data-test=loginInput]').type('admin');
});

When('I type the correct password', () => {
  cy.get('[data-test=passwordInput]').type('timmy');
});

When('I click to log in', () => {
  cy.get('[data-test=submitButton]').click();
});

Then('I should be on the todo page', () => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/todo');
});
