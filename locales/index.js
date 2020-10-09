export const englishLocale = 'en'
export const deutscheLocale = 'de'
export const koreanLocale = 'ko'
export const russianLocale = 'ru'
export const chineseLocale = 'zh'
export const japaneseLocale = 'ja'

export const defaultLocale = englishLocale

export const locales = [
  englishLocale,
  deutscheLocale,
  koreanLocale,
  chineseLocale,
  russianLocale,
  japaneseLocale,
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
  {
    name: '日本語',
    locale: japaneseLocale,
  },
]

export { default as en } from './en'
export { default as de } from './de'
export { default as ko } from './ko'
export { default as ru } from './ru'
export { default as zh } from './zh'
export { default as ja } from './ja'
