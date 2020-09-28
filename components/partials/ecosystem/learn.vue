<template>
  <div class="fix-col" data-sticky-container>
    <div id="js-fix-card" class="fix-card" data-margin-top="96">
      <div class="trailblazing-item">
        <div class="trailblazing-item__icn">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 24H30M18 32H30M34 42H14C12.9391 42 11.9217 41.5786 11.1716 40.8284C10.4214 40.0783 10 39.0609 10 38V10C10 8.93913 10.4214 7.92172 11.1716 7.17157C11.9217 6.42143 12.9391 6 14 6H25.172C25.7024 6.00011 26.211 6.2109 26.586 6.586L37.414 17.414C37.7891 17.789 37.9999 18.2976 38 18.828V38C38 39.0609 37.5786 40.0783 36.8284 40.8284C36.0783 41.5786 35.0609 42 34 42Z"
              stroke="#1A202C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h3 class="trailblazing-item__title">
          {{ $t('ecosystem.learn_how') }}
        </h3>
        <p class="trailblazing-item__txt">
          {{ $t('ecosystem.learn_how_text') }}
        </p>
        <a
          href="https://docs.injectiveprotocol.com/#injective-chain"
          target="_blank"
          rel="noreferrer"
          class="trailblazing-item__link"
        >
          {{ $t('ecosystem.learn_how_docs') }}
          <svg
            width="8"
            height="20"
            viewBox="0 0 8 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.29279 14.707C1.10532 14.5195 1 14.2652 1 14C1 13.7349 1.10532 13.4806 1.29279 13.293L4.58579 10L1.29279 6.70704C1.11063 6.51844 1.00983 6.26584 1.01211 6.00364C1.01439 5.74144 1.11956 5.49063 1.30497 5.30522C1.49038 5.11981 1.74119 5.01465 2.00339 5.01237C2.26558 5.01009 2.51818 5.11088 2.70679 5.29304L6.70679 9.29304C6.89426 9.48057 6.99957 9.73488 6.99957 10C6.99957 10.2652 6.89426 10.5195 6.70679 10.707L2.70679 14.707C2.51926 14.8945 2.26495 14.9998 1.99979 14.9998C1.73462 14.9998 1.48031 14.8945 1.29279 14.707Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Sticky from 'sticky-js'

export default {
  data() {
    return {
      sticky: null,
    }
  },

  mounted() {
    if ($(window).width() > 768) {
      this.sticky = new Sticky('#js-fix-card')
    }
  },

  beforeDestroy() {
    if (this.sticky) {
      this.sticky.destroy()
    }
  },
}
</script>
