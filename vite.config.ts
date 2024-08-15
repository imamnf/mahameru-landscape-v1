import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import Vue from '@vitejs/plugin-vue';

import Tailwind from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  // Settings css untuk vite
  css: {
    postcss: {
      plugins: [Tailwind(), Autoprefixer()]
    }
  },
  plugins: [
    Vue({
      features: {
        // Mengaktifkan propsDestructure untuk vue
        propsDestructure: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Mengaktifkan warning apabila ada file dengan size lebih dari 5000KB
    chunkSizeWarningLimit: 5000
  },
  optimizeDeps: {
    // Mengoptimasi file vue
    entries: ['./src/**/*.vue']
  },
  server: {
    // Aplikasi akan berjalan di port 3001
    port: 3001
  }
});
