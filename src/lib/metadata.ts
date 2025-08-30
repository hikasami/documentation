import type { Metadata } from 'next/types';
import { getToken } from "./og";

export function createMetadata(override: Metadata & { id?: string }): Metadata {
  const id = override.id ?? "default"; 
  const token = getToken(id);

  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: `https://docs.hikasami.com/${id}`,
      images: [
        {
          url: `https://docs.hikasami.com/api/og?id=${id}&token=${token}&title=${encodeURIComponent(String(override.title ?? "Hikasami"))}`,
          width: 1200,
          height: 630,
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
      images: `https://docs.hikasami.com/api/og?id=${id}&token=${token}&title=${encodeURIComponent(String(override.title ?? "Hikasami"))}`,
      ...override.twitter,
    },
  };
}

export const baseUrl = new URL('https://docs.hikasami.com');