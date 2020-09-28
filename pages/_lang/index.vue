<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <v-top />
    <our-family />
    <limitless />
    <trailblazing />
    <wishlist>
      <h2
        class="sec-title main-form__title"
        v-html="$t('home.wishlist_title')"
      ></h2>
    </wishlist>
  </div>
</template>

<script>
import Top from '~/components/partials/index/top'
import OurFamily from '~/components/partials/common/our-family'
import Limitless from '~/components/partials/index/limitless'
import Trailblazing from '~/components/partials/index/trailblazing'
import Wishlist from '~/components/partials/common/wishlist'

export default {
  components: {
    Wishlist,
    'v-top': Top,
    OurFamily,
    Limitless,
    Trailblazing,
  },
}
</script>
