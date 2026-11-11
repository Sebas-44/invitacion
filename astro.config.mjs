import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://invitacion-gabriel-y-veronica.vercel.app/', // Tu URL final de Vercel
  
});