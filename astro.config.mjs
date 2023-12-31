import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://lucent-daifuku-4f96b3.netlify.app',
  integrations: [preact()]
});