import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Relative base works on GitHub Pages (project site) and custom domains
    // without requiring a GITHUB_PAGES env flag in deploy.yml.
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Local-first corpus ships in the bundle (~12 MB), so the default
      // 500 kB warning is noise. Vendor split keeps framework bytes cached
      // across content edits; behaviour is unchanged, only file boundaries.
      chunkSizeWarningLimit: 13000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router'],
            ui: ['lucide-react', 'react-markdown'],
          },
        },
      },
    },
  };
});
