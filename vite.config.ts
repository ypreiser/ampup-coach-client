// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  build: {
    sourcemap: false,
  },

  server: {
    open: true,
    hmr: {
      overlay: false,
    },
  },
});
