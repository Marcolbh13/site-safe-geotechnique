import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite minimale et standard (compatible Bolt.new).
export default defineConfig({
  plugins: [react()],
});
