import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //
    },
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://classting-quiz-donghakang.netlify.app',
  },
})
