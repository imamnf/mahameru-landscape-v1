import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router';
import VueDevTools from 'vite-plugin-vue-devtools';
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

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
    VueRouter({
      // Untuk automasi penamaan pada router
      getRouteName: (routeNode) => {
        return getPascalCaseRouteName(routeNode)
          .replace(/([a-z\d])([A-Z])/g, '$1-$2')
          .toLowerCase();
      }
    }),
    Vue({
      features: {
        // Mengaktifkan propsDestructure untuk vue
        propsDestructure: true
      }
    }),
    // Menambahkan VueDevTools agar dapat mempermudah debugging pada web
    VueDevTools(),
    // Untuk automasi layout pada halaman web
    Layouts({
      defaultLayout: 'AppLayout',
      layoutsDirs: 'src/layout'
    }),
    // Untuk automasi component
    Components({
      dirs: ['src/components', 'src/layout'],
      dts: true,
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [PrimeVueResolver()]
    }),
    // Untuk automasi funsi pada dependensi
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dirs: ['./src/composables', './src/utils'],
      vueTemplate: true
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
