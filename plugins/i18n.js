import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { en, de, ru, ko, zh, ja, defaultLocale } from '~/locales'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: defaultLocale,
    messages: {
      en,
      de,
      ru,
      ko,
      zh,
      ja,
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

  i18n.pathFromLocale = (link, locale) => {
    if (link.endsWith('/')) {
      link.slice(0, link.length - 1)
    }

    const actualLink = link.replace(`${i18n.locale}/`, '')

    if (actualLink === '/' || actualLink === `/${i18n.locale}`) {
      return locale === i18n.fallbackLocale ? '/' : `/${locale}`
    }

    if (locale === i18n.fallbackLocale) {
      return `${actualLink}`
    }

    return `/${locale}${actualLink}`
  }

  app.i18n = i18n
}
