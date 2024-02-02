import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import tailwind from '@astrojs/tailwind'
import solid from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  site: 'https://piapot.me',
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true },
  }),
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'one-dark-pro' },
      remarkPlugins: [remarkToc],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: true,
    }),
    tailwind(),
    solid({ include: ['src/components/solid/**/*'] }),
    sitemap(),
  ],
})
