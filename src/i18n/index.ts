import US_EN from './locales/us-en';
import { enUS, id, ptBR, pt } from 'date-fns/locale';
import { APP_LOCALE } from '@/app/config';

export type I18N = typeof US_EN;

export type I18NDeepPartial = {
  [key in keyof I18N]?: Partial<I18N[key]>;
}

export const getTextForLocale = async (locale: string): Promise<I18N> => {
  const text = US_EN;

  Object.entries(await localeTextImports[locale.toLocaleLowerCase()]?.() ?? {})
    .forEach(([key, value]) => {
      // Fall back to English for missing keys
      text[key as keyof I18N] = {
        ...text[key as keyof I18N],
        ...value as any,
      };
    });

  return text;
};

export const DATE_FN_LOCALE = getDateFnLocale(APP_LOCALE);
