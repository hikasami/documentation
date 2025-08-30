import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://docs.hikasami.com',
      images: [
        {
          url: `https://docs.hikasami.com/api/og?title=${override.title}`,
          width: 1200,
          height: 630,
          alt: 'Hikasami Docs OG Image',
        },
      ],
      siteName: 'Hikasami Docs',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@hikasami',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: `https://docs.hikasami.com/api/og?title=${override.title}`,
      ...override.twitter,
    },
  };
}

export const baseUrl = new URL('https://docs.hikasami.com');