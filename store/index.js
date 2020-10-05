export const state = () => ({
  locales: ['en', 'de', 'ru', 'zh'],
  locale: 'en',
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
