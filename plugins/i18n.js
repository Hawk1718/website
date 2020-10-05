import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './../locales/en'
import de from './../locales/de'
import ru from './../locales/ru'
import zh from './../locales/zh'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en,
      de,
      ru,
      zh,
    },
  })

  i18n.path = (link) => {
    if (link.endsWith('/')) {
      link.slice(0, link.length - 1)
    }

    if (i18n.locale === i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${i18n.locale}/${link}`
  }

  app.i18n = i18n
}
