import US_EN from './locales/us-en';
import { enUS, id, ptBR, pt } from 'date-fns/locale';
import { APP_LOCALE } from '@/app/config';

export type I18N = typeof US_EN;

export type I18NDeepPartial = {
  [key in keyof I18N]?: Partial<I18N[key]>;
}

export const DATE_FN_LOCALE = getDateFnLocale(APP_LOCALE);
