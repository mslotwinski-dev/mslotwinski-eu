import { createI18n } from 'vue-i18n'
import { messages, AppLocale } from './messages'

export type { AppLocale } from './messages'

export const LOCALE_STORAGE_KEY = 'locale'
export const SUPPORTED_LOCALES: AppLocale[] = ['pl', 'en']

const rawLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as AppLocale | null
const locale: AppLocale =
  rawLocale && SUPPORTED_LOCALES.includes(rawLocale) ? rawLocale : 'pl'

const i18n = createI18n({
  legacy: true,
  globalInjection: true,
  locale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
