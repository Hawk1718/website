import { locales, defaultLocale } from '~/locales'

export const state = () => ({
  locales,
  locale: defaultLocale,
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
