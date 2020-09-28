<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <v-top />
    <core />
    <questions />
    <wishlist>
      <h2
        class="sec-title main-form__title"
        v-html="$t('ecosystem.wishlist_title')"
      ></h2>
    </wishlist>
  </div>
</template>

<script>
import Top from '~/components/partials/ecosystem/top'
import Core from '~/components/partials/ecosystem/core'
import Questions from '~/components/partials/ecosystem/questions'
import Wishlist from '~/components/partials/common/wishlist'

export default {
  components: {
    'v-top': Top,
    Core,
    Questions,
    Wishlist,
  },
}
</script>
