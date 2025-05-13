import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    // Pour le dev local
    historyApiFallback: true,
  },
  // Important pour le build en prod
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
