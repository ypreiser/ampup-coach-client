// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
