<template>
  <div id="js-popup" class="popup">
    <div
      class="popup__overlay js-open-popup"
      @click.stop="$emit('popup-closed')"
    ></div>
    <div class="popup__main">
      <button
        class="btn close popup__close js-open-popup"
        title="Close"
        @click.stop="$emit('popup-closed')"
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
      <h2 class="popup__header">
        Join the Future of <br /><span>Decentralized Finance</span>
      </h2>
      <client-only>
        <waitlist
          input-class="main-form-form__input"
          form-class="row-form main-form-form"
          btn-class="btn btn_l btn_black row-form__submit main-form-form__submit"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import Waitlist from '~/components/partials/common/waitlist'

export default {
  components: {
    Waitlist,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  watch: {
    isOpen() {
      $('#js-popup').fadeToggle('300')
    },
  },
}
</script>
