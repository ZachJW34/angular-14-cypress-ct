import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    } as any,
    specPattern: 'src/**/*.cy.ts',
  },
});
