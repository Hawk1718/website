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
          </ul>
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
            {{ $t('header.chat') }}
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
export default {
  mounted() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
        $('#js-header').addClass('fix')
      } else {
        $('#js-header').removeClass('fix')
      }
    })
  },
}
</script>
