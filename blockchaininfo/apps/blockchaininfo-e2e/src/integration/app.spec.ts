import { getGreeting } from '../support/app.po';

describe('blockchaininfo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to blockchaininfo!');
  });
});
