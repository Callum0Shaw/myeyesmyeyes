import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      components: {
        about: 'storyblok/About',
        page: 'storyblok/Page'
      },
    })
  ],
});