import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // CHANGE this to your deployed URL before building for production
  site: 'https://lenoragray.example.com',
  integrations: [
    tailwind({
      // We supply our own base styles in src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
