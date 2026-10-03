// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://studionovak.com',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
