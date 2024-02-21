import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/', // Set the base path to root
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    port: 3000, // Specify the port for the dev server
    proxy: {
      // If you have any API routes, configure proxying here
    },
    fs: {
      // Allow serving files from the build output directory
      strict: false,
    },
    // Fallback to index.html for all routes
    hmr: {
      protocol: 'ws', // WebSocket protocol (optional)
    },
    watch: {
      // Enable file watching for the build directory
      usePolling: true,
      interval: 100,
    },
  },
});
