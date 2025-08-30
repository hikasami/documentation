import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/api/og'],
      },
    ],
    sitemap: 'https://docs.hikasami.com/sitemap.xml',
  }
}