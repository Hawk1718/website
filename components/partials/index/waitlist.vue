<template>
  <client-only>
    <!-- eslint-disable vue/no-v-html -->
    <section class="main-form">
      <waitlist
        v-scroll-reveal
        input-class="main-form-form__input"
        form-class="row-form main-form-form"
        btn-class="btn btn_l btn_black row-form__submit main-form-form__submit"
      >
        <h2
          class="sec-title main-form__title"
          v-html="$t('home.waitlist_title')"
        ></h2>
      </waitlist>
    </section>
  </client-only>
</template>

<script>
import Waitlist from '~/components/partials/common/waitlist'

export default {
  components: {
    Waitlist,
  },
}
</script>
