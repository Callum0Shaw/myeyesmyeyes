import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    storyblok({
      accessToken: 'r9ie4IIkISoPVfCgX7Kx7Att',
      bridge: true,
      components: {
        about: 'storyblok/About',
        page: 'storyblok/Page'
      },
    })
  ],
});