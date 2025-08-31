import { source } from '@/lib/source';
import {
  DocsBody,
  DocsPage
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { Rate } from '@/components/rate';
import { getMDXComponents } from '@/mdx-components';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  console.log(page)

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} lastUpdate={new Date(page.data.lastModified  || '')}
      tableOfContent={{
        style: 'clerk',
      }}>
      <h1 className="text-3xl font-semibold">{page.data.title}</h1>
      { page.data.description &&
        <p className="text-lg text-fd-muted-foreground">
        {page.data.description}
      </p>
      }
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <LLMCopyButton data={{
          content: page.data.content,
          title: page.data.title,
          description: page.data.description
        }} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/hikasami/documentation/blob/main/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <Rate
        onRateAction={async (url, feedback) => {
          'use server';
          await new Promise((r) => setTimeout(r, 1000));
          return { githubUrl: 'https://t.me/hikasami_support_bot' };
        }}
      />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return createMetadata({
    id: page.url,
    title: page.data.title,
    description: page.data.description,
  });
}