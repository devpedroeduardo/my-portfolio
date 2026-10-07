import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// Endereço público do site, usado nas tags de compartilhamento (Open Graph).
// A Vercel informa o domínio de produção durante o build.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export default defineConfig({
  site,
  integrations: [
    tailwind(), 
    react()
  ],

  adapter: vercel()
});