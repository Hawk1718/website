<template>
  <div id="js-mob-menu" class="mob-menu" :class="{ open: isOpen }">
    <div class="mob-menu__overlay js-open-menu"></div>
    <div class="mob-menu__container">
      <div class="mob-menu__header">
        <NuxtLink :to="$i18n.path('')" class="header-logo">
          <img src="/img/svg/logo-revers.svg" alt="Injective Protocol" />
        </NuxtLink>
        <button
          class="btn close mob-menu__close js-open-menu"
          @click.stop.prevent="$emit('closed')"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M6 18L18 6L6 18Z"
              stroke="#1A202C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <nav class="mob-menu-nav">
        <ul>
          <li><NuxtLink :to="$i18n.path('')"> Home </NuxtLink></li>
          <li>
            <NuxtLink :to="$i18n.path('ecosystem')">
              {{ $t('nav.injective_ecosystem') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$i18n.path('company')">
              {{ $t('nav.company') }}
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://medium.com/injective-labs"
              target="_blank"
              rel="noreferrer"
            >
              {{ $t('nav.blog') }}
            </a>
          </li>
          <li>
            <a
              href="https://t.me/joininjective"
              role="button"
              target="_blank"
              rel="noreferrer"
              style="cursor: pointer"
            >
              <span style="margin-right: 0.25rem">{{ $t('header.chat') }}</span>
            </a>
          </li>
          <li class="mobile-locale">
            <a
              v-for="locale in visibleLocales"
              :key="`mobile-locale-${locale.name}`"
              :href="$i18n.pathFromLocale($route.fullPath, locale.locale)"
              class="mobile-locale-item"
            >
              {{ locale.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { clientLocales } from '~/locales'

export default {
  props: {
    isOpen: {
      required: true,
      type: Boolean,
    },
  },

  data() {
    return {
      locales: clientLocales,
    }
  },

  computed: {
    visibleLocales() {
      return this.locales.filter(({ locale }) => locale !== this.$i18n.locale)
    },
  },
}
</script>
