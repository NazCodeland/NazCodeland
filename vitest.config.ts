import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    reporters: 'verbose',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
