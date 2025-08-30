import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Body } from '@/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Logo from '@/components/ui/logo';

export const metadata = createMetadata({
  title: {
    template: '%s | Документация Hikasami',
    default: 'Документация Hikasami',
  },
  description: 'Документация по Hikasami.',
  metadataBase: baseUrl,
});

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const base = baseOptions();

  return (
    <html
      lang="ru"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <Body>
        <Provider>
          <DocsLayout
            {...base}
            tree={source.pageTree}
            // just icon items
            nav={{
              ...base.nav,
              title: (<Logo/>),
              children: (
                <button
                  type="button"
                  className={cn(
                    buttonVariants({
                      variant: 'secondary',
                      size: 'sm',
                      className:
                        'absolute left-1/2 top-1/2 -translate-1/2 text-fd-muted-foreground rounded-full gap-2 md:hidden',
                    }),
                  )}
                >
                </button>
              ),
            }}
            sidebar={{
              tabs: {
                transform(option, node) {
                  const meta = source.getNodeMeta(node);
                  if (!meta || !node.icon) return option;

                  const color = `var(--${meta.path.split('/')[0]}-color, var(--color-fd-foreground))`;

                  return {
                    ...option,
                    icon: (
                      <div
                        className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                        style={
                          {
                            '--tab-color': color,
                          } as object
                        }
                      >
                        {node.icon}
                      </div>
                    ),
                  };
                },
              },
            }}
          >
            {children}
          </DocsLayout>
        </Provider>
      </Body>
    </html>
  );
}