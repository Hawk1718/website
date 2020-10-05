<template>
  <client-only>
    <header id="js-header" class="header">
      <div class="header__container">
        <NuxtLink :to="$i18n.path('')" class="header-logo">
          <img src="/img/svg/logo-color.svg" alt="Injective Protocol" />
        </NuxtLink>
        <nav class="header-nav">
          <ul>
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
              <button
                type="button"
                class="btn"
                aria-label="Language"
                @click.stop="toggleLocaleDropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <div class="dropdown-menu right" :class="{ open: localeDropdown }">
            <a
              v-for="locale in visibleLocales"
              :key="`locale-${locale.name}`"
              :href="$i18n.pathFromLocale($route.fullPath, locale.locale)"
              class="dropdown-item"
            >
              {{ locale.name }}
            </a>
          </div>
        </nav>
        <div class="header__bar">
          <button
            class="btn btn_m btn_transition header-btn"
            style="margin-right: 0.5rem"
            @click.stop="$emit('popup-toggled')"
          >
            {{ $t('header.join_waitlist') }}
          </button>
          <a
            href="https://t.me/joininjective"
            role="button"
            target="_blank"
            rel="noreferrer"
            class="btn btn_m btn_transition header-btn js-open-popup"
          >
            <span style="margin-right: 0.25rem">{{ $t('header.chat') }}</span>
            <svg
              width="4"
              height="8"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292787 9.70701C0.105316 9.51948 0 9.26517 0 9.00001C0 8.73485 0.105316 8.48054 0.292787 8.29301L3.58579 5.00001L0.292787 1.70701C0.110629 1.51841 0.00983372 1.26581 0.0121121 1.00361C0.0143906 0.741413 0.11956 0.4906 0.304968 0.305192C0.490376 0.119784 0.741189 0.0146148 1.00339 0.0123364C1.26558 0.010058 1.51818 0.110853 1.70679 0.293011L5.70679 4.29301C5.89426 4.48054 5.99957 4.73485 5.99957 5.00001C5.99957 5.26517 5.89426 5.51948 5.70679 5.70701L1.70679 9.70701C1.51926 9.89448 1.26495 9.9998 0.999786 9.9998C0.734622 9.9998 0.480314 9.89448 0.292787 9.70701Z"
              />
            </svg>
          </a>
          <button
            class="btn burger header-btn js-open-menu"
            @click.stop="$emit('mobile-menu-toggled')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18H20M4 6H20H4ZM4 12H20H4Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </client-only>
</template>

<script>
import { clientLocales } from '~/locales'

export default {
  data() {
    return {
      locales: clientLocales,
      localeDropdown: false,
    }
  },

  computed: {
    visibleLocales() {
      return this.locales.filter(({ locale }) => locale !== this.$i18n.locale)
    },
  },

  mounted() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
        $('#js-header').addClass('fix')
      } else {
        $('#js-header').removeClass('fix')
      }
    })
  },

  methods: {
    changeLocale({ locale }) {
      this.$i18n.locale = locale
      this.$store.commit('SET_LOCALE', locale)
      this.$router.push({ name: this.$route.name, params: { lang: locale } })
    },

    toggleLocaleDropdown() {
      this.localeDropdown = !this.localeDropdown
    },
  },
}
</script>
