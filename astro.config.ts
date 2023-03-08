import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/static'
import solidJs from '@astrojs/solid-js'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), unocss()],
  output: 'static',
  adapter: vercel({
    analytics: true,
  }),
})
