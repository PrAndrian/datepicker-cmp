import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'datepicker-cmp',
      fileName: (format) => `datepicker-cmp.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      },
      plugins: [],
    },
    test: {
      globals: false,
      environment: 'jsdom'
    },
  },
  plugins: [react()],
  css: {
    // Add PostCSS plugins to the preprocess options
    preprocess: {
      // Use the PostCSS plugin and specify its configuration file
      postcss: {
        plugins: [
          autoprefixer(), // Include autoprefixer
          tailwindcss(), // Include Tailwind CSS
        ],
      },
    },
  },
});