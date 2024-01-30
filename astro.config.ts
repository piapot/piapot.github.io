import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/static'
import solid from '@astrojs/solid-js'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), unocss()],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
})
