import { AppComponent } from './app.component';

it('should', () => {
  cy.mount(AppComponent);
  cy.contains('my-app');
});
