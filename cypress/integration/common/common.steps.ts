import { Given } from 'cypress-cucumber-preprocessor/steps';

// Should mock only request, but here we are dealing with localstorage only.
export function commonSteps() {
  Given('I am logged in', () => {
    cy.visit('/');
    cy.get('[data-test=loginInput]').type('admin');
    cy.get('[data-test=passwordInput]').type('timmy');
    cy.get('[data-test=submitButton]').click();
  });
}
