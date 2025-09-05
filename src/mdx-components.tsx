import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { HikasamiIconsBox } from './components/icons/iconBox';
import { HikasamiColorBox } from './components/colors/Box';
import { HikasamiColorList } from './components/colors/List';
import { Preview } from './components/preview';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    HikasamiIconsBox,
    HikasamiColorBox,
    HikasamiColorList,
    Preview,
    ...components,
  };
}
