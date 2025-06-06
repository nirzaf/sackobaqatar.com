// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Import cypress-axe for accessibility testing
import 'cypress-axe';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Add global configurations
Cypress.on('uncaught:exception', (err, _runnable) => {
  // Prevent Cypress from failing on uncaught exceptions
  // that might occur in the application
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false;
  }
  if (err.message.includes('Non-Error promise rejection captured')) {
    return false;
  }
  return true;
});

// Set default viewport for consistent testing
Cypress.Commands.add('setupViewport', () => {
  cy.viewport(1280, 720);
});

beforeEach(() => {
  cy.setupViewport();
});