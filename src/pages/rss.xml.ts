import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context: Record<string, string>) {
  const posts = await getCollection('posts')
  return rss({
    title: 'Piapot | Blog',
    description: 'My blog posts',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-US</language>`,
  })
}
