<template>
  <div>
    <v-top />
    <core />
    <questions />
    <wishlist>
      <h2 class="sec-title main-form__title">
        Start trading with <span>true freedom</span> and <br /><span
          >unlimited</span
        >
        <br /><span>possibilities</span>
      </h2>
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
