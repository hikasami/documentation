'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

const { provider } = defineI18nUI(i18n, {
  translations: {
    ru: {
      displayName: 'Русский',
        search: 'Поиск',
        searchNoResult: 'Ничего не найдено',
        toc: 'На странице',
        tocNoHeadings: 'Нет заголовков',
        lastUpdate: 'Последнее обновление',
        chooseLanguage: 'Выбор языка',
        nextPage: 'Следующая страница',
        previousPage: 'Предыдущая страница',
        chooseTheme: 'Тема',
        editOnGithub: 'Редактировать на GitHub',
    },
  },
});

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider i18n={provider('ru')}>
      <TooltipProvider>
        <script suppressHydrationWarning/>
        {children}
      </TooltipProvider>
    </RootProvider>
  );
}