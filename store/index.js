export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
