export const englishLocale = 'en'
export const deutscheLocale = 'de'
export const koreanLocale = 'ko'
export const russianLocale = 'ru'
export const chineseLocale = 'zh'

export const defaultLocale = englishLocale

export const locales = [
  englishLocale,
  deutscheLocale,
  koreanLocale,
  chineseLocale,
  russianLocale,
]

export const clientLocales = [
  {
    name: 'English',
    locale: englishLocale,
  },
  {
    name: 'Deutsch',
    locale: deutscheLocale,
  },
  {
    name: '汉语',
    locale: chineseLocale,
  },
  {
    name: '한국어',
    locale: koreanLocale,
  },
  {
    name: 'Русский',
    locale: russianLocale,
  },
]

export { default as en } from './en'
export { default as de } from './de'
export { default as ko } from './ko'
export { default as ru } from './ru'
export { default as zh } from './zh'
