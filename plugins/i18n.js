import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '~/locales/en'

Vue.use(VueI18n)

export default ({ app, app: { store } }) => {
  const locale = 'en'

  app.i18n = new VueI18n({
    locale,
    fallbackLocale: locale,
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    messages: { en }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
