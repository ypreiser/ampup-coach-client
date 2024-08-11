// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    mockReset: true,
    // moduleNameMapper: {
    //   '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    // },
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
