import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [sanity({
    projectId: '8qohnu41',
    dataset: 'production',
    useCdn: false, // Set to false for static builds to ensure fresh data
    studioBasePath: '/admin', // This will embed Sanity Studio at /admin
  }), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});