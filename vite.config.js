// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root
        'C:/Users/kashish dhawan/Downloads/reactproject/my-project',
        // Allow serving fonts from slick-carousel
        'C:/Users/kashish dhawan/Downloads/reactproject/node_modules/slick-carousel/slick/fonts'
      ]
    }
  }
});
