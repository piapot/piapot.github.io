import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
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
      gfm: false,
    }),
    tailwind(),
    icon(),
    solid({ include: ['**/solid/*'] }),
    sitemap(),
  ],
})
